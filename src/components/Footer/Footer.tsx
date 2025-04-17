import { useEffect, useState } from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaInstagram, FaLinkedin, FaSun } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { FiDownload, FiArrowUp, FiMoon, FiMail } from 'react-icons/fi';

interface FooterData {
  email?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  x?: string;
  resumeUrl?: string;
  name?: string;
}

interface FooterProps {
  jsonPath: string;
  iconColor?: string;
  navTabs?: string[];
}

const Footer = ({ jsonPath, iconColor = 'var(--color-primary)', navTabs = [] }: FooterProps) => {
  const [data, setData] = useState<FooterData | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    fetch(jsonPath)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [jsonPath]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className={`${styles.footer} fade-in`}>
      {/* Socials */}
      <div className={styles.socials}>
        {data.resumeUrl && (
          <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" title="Resume">
            <FiDownload size={22} color={iconColor} />
          </a>
        )}
        {data.email && (
          <a href={`mailto:${data.email}`} title="Email">
            <FiMail size={22} color={iconColor} />
          </a>
        )}
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={22} color={iconColor} />
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={22} color={iconColor} />
          </a>
        )}
        {data.x && (
          <a href={data.x} target="_blank" rel="noopener noreferrer" title="X">
            <SiX size={22} color={iconColor} />
          </a>
        )}
        {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram size={22} color={iconColor} />
          </a>
        )}
      </div>

      {/* Nav */}
      {navTabs.length > 0 && (
        <nav className={styles.nav}>
          {navTabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(tab)}
              className={styles.navLink}
              title={`Go to ${tab}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      )}

      {/* Controls */}
      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          onClick={() => window.open('resume.pdf')}
          title="Download Resume"
        >
          <FiDownload size={20} />
          <span>Resume</span>
        </button>
        <button onClick={handleScrollTop} className={styles.controlBtn} title="Back to Top">
          <FiArrowUp size={20} />
          <span>Top</span>
        </button>
        <button onClick={toggleDarkMode} className={styles.controlBtn} title="Toggle Dark Mode">
          {darkMode ? <FaSun size={20} /> : <FiMoon size={20} />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>

      {/* Credit */}
      <p className={styles.credit}>
        © {new Date().getFullYear()} {data.name || 'Apoorv Malik'} · Built with React & ❤️
      </p>
    </footer>
  );
};

export default Footer;
