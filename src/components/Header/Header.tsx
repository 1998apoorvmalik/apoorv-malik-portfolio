import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { SiX } from 'react-icons/si';

import { AboutData } from '@/model/about-data';
import { fetchAboutData } from '@/services/data-service';

import styles from './Header.module.css';
import Tab from './Tab';

interface HeaderProps {
  jsonPath: string;
  tabs: string[];
  scrollOffset?: number;
  iconColor?: string;
}

const Header = ({ jsonPath, tabs, scrollOffset = 500, iconColor = 'var(--color-primary)' }: HeaderProps) => {
  const [data, setData] = useState<AboutData | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onHeaderTabClick = (tab: string) => {
    const section = document.getElementById(tab);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + scrollOffset;
      let current = tabs[0];

      for (let i = 0; i < tabs.length; i++) {
        const section = document.getElementById(tabs[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            current = tabs[i];
          }
        }
      }

      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs, scrollOffset]);

  useEffect(() => {
    setError(null); // Clear any previous error
    setLoading(true); // Set loading to true
    setData(null); // Clear data before fetching new data

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
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.header}>
      <div>
        {tabs.map((tab: string) => {
          return <Tab key={tab} text={tab} active={activeTab === tab} onClick={() => onHeaderTabClick(tab)} />;
        })}
      </div>
      <div className={styles.socials}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Open Resume">
          <FiDownload size={24} color={iconColor} />
        </a>
        {data?.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={24} color={iconColor} />
          </a>
        )}
        {data?.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={24} color={iconColor} />
          </a>
        )}
        {data?.x && (
          <a href={data.x} target="_blank" rel="noopener noreferrer" title="X">
            <SiX size={24} color={iconColor} />
          </a>
        )}
        {data?.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram size={24} color={iconColor} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
