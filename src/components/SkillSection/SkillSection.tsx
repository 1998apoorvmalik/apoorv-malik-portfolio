import styles from './SkillSection.module.css';
import { SkillData } from '../../model/SkillData';
import { useEffect, useState } from 'react';
import { fetchSkills } from '../../services/dataService';
import getSkillIconComponent from '../../utils/getIconComponent';

interface SkillSectionProps {
  jsonPath: string;
  iconSize?: number;
}

const SkillSection = ({ jsonPath, iconSize = 36 }: SkillSectionProps) => {
  const [items, setItems] = useState<SkillData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    setItems(null);

    fetchSkills(jsonPath)
      .then(setItems)
      .catch((err) => {
        setError(`Failed to load data: ${err}`);
      })
      .finally(() => setLoading(false));
  }, [jsonPath]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderSection = (title: string, keys: string[], isBottomSection = false) => (
    <div>
      <h3 className={styles.subheading}>{title}</h3>
      <div className={isBottomSection ? styles['bottom-container'] : styles.container}>
        {keys.map((name, index) => {
          const data = getSkillIconComponent(name, iconSize);
          return (
            <div key={index} className={styles.card}>
              {data ? (
                <>
                  <div>{data[1]}</div>
                  <div className={styles.label}>{data[0]}</div>
                </>
              ) : (
                <div className={styles.labelOnly}>{name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="section-title">Skills</h2>

      <div className={styles.topGrid}>
        {items?.['languages'] && (
          <>
            {renderSection('Languages', items['languages'])}
          </>
        )}
        {items?.['libraries-frameworks'] && (
          <>
            {renderSection('Libraries & Frameworks', items['libraries-frameworks'])}
          </>
        )}
        {items?.['tools'] && (
          <>
            {renderSection('Tools & Platforms', items['tools'])}
          </>
        )}
                {items?.['interests'] && (
          <>
            {renderSection('Interests', items['interests'])}
          </>
        )}
      </div>
    </div>
  );
};

export default SkillSection;
