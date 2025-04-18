import { useEffect, useState } from 'react';

import { ResumeEntry } from '@/model/resume-entry';
import { fetchResumeEntries } from '@/services/data-service';

import styles from './GeneralSection.module.css';
import ResumeItem from './ResumeItem';

interface GeneralSectionProps {
  title: string;
  jsonPath: string;
}

const GeneralSection = ({ title, jsonPath }: GeneralSectionProps) => {
  const [items, setItems] = useState<ResumeEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setItems([]); // Clear items before fetching new data
    setLoading(true); // Set loading to true
    setError(null); // Clear any previous error

    // Fetch the JSON data
    fetchResumeEntries(jsonPath)
      .then(setItems)
      .catch((err) => {
        setError(`Failed to load data: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jsonPath]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.section}>
      <h2 className="section-title">{title}</h2>
      {items.map((item: ResumeEntry) => (
        <ResumeItem key={item.heading} item={item} />
      ))}
    </div>
  );
};

export default GeneralSection;
