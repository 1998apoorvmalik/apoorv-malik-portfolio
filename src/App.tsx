import './App.css';

import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import GeneralSection from './components/GeneralSection/GeneralSection';
import Header from './components/Header/Header';
import SkillSection from './components/SkillSection/SkillsSection';

const headerTabs = ['About', 'Skills', 'Education', 'Experience', 'Publications', 'Projects'];

function App() {
  return (
    <div>
      <Header jsonPath="data/about.json" tabs={headerTabs} />
      <section id="About">
        <AboutSection jsonPath="data/about.json" picturePath="profile-picture.jpg" />
      </section>
      <section id="Skills">
        <SkillSection jsonPath="data/skills.json" />
      </section>
      <section id="Education">
        <GeneralSection title="Education" jsonPath="data/education.json" />
      </section>
      <section id="Experience">
        <GeneralSection title="Experience" jsonPath="data/experience.json" />
      </section>
      <section id="Publications">
        <GeneralSection title="Publications" jsonPath="data/publications.json" />
      </section>
      <section id="Projects">
        <GeneralSection title="Projects" jsonPath="data/projects.json" />
      </section>
      <Footer jsonPath="data/about.json" navTabs={['About', 'Skills', 'Experience', 'Projects']} />
    </div>
  );
}

export default App;
