import { ResumeEntry } from "../../model/ResumeEntry";
import styles from './GeneralSection.module.css';

interface ResumeItemProps {
  item: ResumeEntry;
}

const ResumeItem = ({ item }: ResumeItemProps) => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles['heading-container']}>
        <h3>{item.heading}</h3>
        <p>{item.description1}</p>
      </div>
      <div className={styles['heading-container']}>
        <h4 dangerouslySetInnerHTML={{ __html: item.subheading || '' }}></h4>
        <p>{item.description2}</p>
      </div>
      {item.tags && item.tags.length > 0 && (
        <div className={styles.tags}>
          {item.tags.map((tag: string, index: number) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
      <h5 dangerouslySetInnerHTML={{ __html: item.subtitle || '' }}></h5>
      {item.content.length === 1 ? (
        <div dangerouslySetInnerHTML={{ __html: item.content[0] }}></div>
      ) : (
        <ul>
          {item.content.map((entry: string, idx: number) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: entry }} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeItem;
