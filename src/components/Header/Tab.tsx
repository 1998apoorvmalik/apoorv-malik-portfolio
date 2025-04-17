import styles from './Header.module.css'

interface ButtonProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
};

const Tab = ({ text = 'btn', active = false, onClick = () => { } }: ButtonProps) => {
  return <button className={`${styles.button} ${(active ? styles.active : '')}`} onClick={onClick}>
    {text}
  </button>
}

export default Tab
