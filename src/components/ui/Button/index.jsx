import styles from './Button.module.scss';

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className || ''}`}>
      {children}
    </button>
  );
};

export default Button;
