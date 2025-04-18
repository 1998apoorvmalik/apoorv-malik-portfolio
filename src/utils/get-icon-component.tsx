import type { ReactElement } from 'react';
import { BiCode } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import {
  FaBrain,
  FaCode,
  FaEye,
  FaGamepad,
  FaGitAlt,
  FaJava,
  FaLaptopCode,
  FaObjectGroup,
  FaSwift,
} from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { GiDna1, GiDna2 } from 'react-icons/gi';
import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithub,
  SiGnubash,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiKeras,
  SiLeetcode,
  SiLinux,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiOpengl,
  SiPandas,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiUnity,
} from 'react-icons/si';

// 👇 Return type is a tuple: [label, JSX element] or null
const getSkillIconComponent = (skill: string, size: number): [string, ReactElement] | null => {
  const key = skill.toLowerCase();

  switch (key) {
    case 'html':
      return ['HTML', <SiHtml5 size={size} />];
    case 'css':
      return ['CSS', <SiCss3 size={size} />];
    case 'js':
    case 'javascript':
      return ['JavaScript', <SiJavascript size={size} />];
    case 'typescript':
      return ['TypeScript', <SiTypescript size={size} />];
    case 'c++':
      return ['C++', <SiCplusplus size={size} />];
    case 'c':
      return ['C', <FaCode size={size} />];
    case 'c#':
      return ['C#', <FaCode size={size} />]; // no SiCsharp available
    case 'python':
      return ['Python', <SiPython size={size} />];
    case 'java':
      return ['Java', <FaJava size={size} />];
    case 'kotlin':
      return ['Kotlin', <FaCode size={size} />];
    case 'swift':
      return ['Swift', <FaSwift size={size} />];
    case 'dart':
      return ['Dart', <SiDart size={size} />];
    case 'ejs':
      return ['EJS', <FaCode size={size} />];
    case 'tensorflow':
    case 'tensorflow & keras':
      return ['TensorFlow', <SiTensorflow size={size} />];
    case 'keras':
      return ['Keras', <SiKeras size={size} />];
    case 'scikit-learn':
      return ['Scikit-learn', <SiScikitlearn size={size} />];
    case 'opencv':
      return ['OpenCV', <SiOpencv size={size} />];
    case 'flask':
      return ['Flask', <SiFlask size={size} />];
    case 'node':
    case 'node.js':
      return ['Node.js', <SiNodedotjs size={size} />];
    case 'express':
      return ['Express', <SiExpress size={size} />];
    case 'jquery':
      return ['jQuery', <SiJquery size={size} />];
    case 'bootstrap':
      return ['Bootstrap', <SiBootstrap size={size} />];
    case 'mongodb':
      return ['MongoDB', <SiMongodb size={size} />];
    case 'docker':
      return ['Docker', <SiDocker size={size} />];
    case 'flutter':
      return ['Flutter', <SiFlutter size={size} />];
    case 'firebase':
      return ['Firebase', <SiFirebase size={size} />];
    case 'unity':
      return ['Unity', <SiUnity size={size} />];
    case 'opengl':
      return ['OpenGL', <SiOpengl size={size} />]; // requires scaling, size is too small
    case 'figma':
      return ['Figma', <SiFigma size={size} />];
    case 'git':
      return ['Git', <FaGitAlt size={size} />];
    case 'github':
      return ['GitHub', <SiGithub size={size} />];
    case 'sql':
      return ['SQL', <SiSqlite size={size} />];
    case 'bash':
      return ['Bash', <SiGnubash size={size} />];
    case 'linux':
    case 'linux/bash':
      return ['Linux/Bash', <SiLinux size={size} />];
    case 'leetcode':
      return ['LeetCode', <SiLeetcode size={size} />];
    case 'react':
      return ['React', <SiReact size={size} />];
    case 'haskell':
      return ['Haskell', <SiHaskell size={size} />];
    case 'threejs':
      return ['Three.js', <SiThreedotjs size={size} />];
    case 'pytorch':
      return ['PyTorch', <SiPytorch size={size} />];
    case 'numpy':
      return ['NumPy', <SiNumpy size={size} />];
    case 'pandas':
      return ['Pandas', <SiPandas size={size} />];
    case 'matplotlib':
      return ['Matplotlib', <BiCode size={size} />];
    case 'nginx':
      return ['Nginx', <SiNginx size={size} />];
    case 'aws':
      return ['AWS', <FaAws size={size} />];
    case 'postman':
      return ['Postman', <SiPostman size={size} />];

    // cs interests
    case 'computational biology':
      return ['Computational Biology', <GiDna2 size={size} />];
    case 'bioinformatics':
      return ['Bioinformatics', <GiDna1 size={size} />];
    case 'data science':
    case 'data analysis':
      return ['Data Science', <BsDatabase size={size} />];
    case 'software development':
    case 'mobile':
    case 'desktop':
    case 'web':
      return ['Software Development', <FaLaptopCode size={size} />];
    case 'machine learning':
    case 'ml':
    case 'ai':
    case 'artificial intelligence':
      return ['AI & Machine Learning', <FaBrain size={size} />];
    case 'computer vision':
      return ['Computer Vision', <FaEye size={size} />];
    case 'algorithms':
      return ['Algorithms', <FaCode size={size} />];
    case 'computer graphics':
    case 'game development':
      return ['Graphics & Game Dev', <FaGamepad size={size} />];
    case 'ui/ux design':
      return ['UI/UX Design', <FaObjectGroup size={size} />];

    default:
      return null;
  }
};

export default getSkillIconComponent;
