import { useEffect, useState } from "react";
import { AboutData } from "../../model/AboutData";
import { fetchAboutData } from "../../services/dataService";
import styles from './AboutSection.module.css';


interface AboutSectionProps {
  jsonPath: string;
  picturePath: string;
}

export default function AboutSection({ jsonPath, picturePath }: AboutSectionProps) {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);   // Clear any previous error
    setLoading(true); // Set loading to true
    setData(null);    // Clear data before fetching new data

    fetchAboutData(jsonPath)
      .then(setData)
      .catch((err) => {
        setError(`Failed to load data: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jsonPath]);

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.profile}>
      <img src={picturePath} alt="Profile-Picture" className={styles.avatar} />
      <div className={styles['profile-text']}>
        <h1 className={styles.name}>{data?.name}</h1>
        <h2 className={styles.role}>{data?.role}</h2>
        <p>{data?.description}</p>
        <div style={{ height: '1em' }}></div>
        {data?.email && (
          <p><strong>Email:</strong>{' '}
            {Array.isArray(data.email)
              ? data.email.map((email: string, index: number) => (
                <span key={index}>
                  <a href={`mailto:${email}`} title="Click to email">{email}</a>
                  {index < data.email.length - 1 && ', '}
                </span>
              ))
              : <a href={`mailto:${data.email}`} title="Click to email">{data.email}</a>}
          </p>
        )}
        {data?.phone && (
          <p><strong>Phone:</strong> {data.phone}</p>
        )}

        {data?.degree && (
          <p><strong>Degree:</strong> {data.degree}</p>
        )}

        {data?.location && (
          <p><strong>Location:</strong> {data.location}</p>
        )}

        {data?.languages && (
          <p><strong>Languages:</strong> {data.languages}</p>
        )}
        <button className={styles.resume} onClick={() => window.open('resume.pdf')}>
          Download Resume
        </button>
      </div>
    </div>
  );
}
