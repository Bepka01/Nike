import styles from './Button.module.scss';

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button {...props} className={`${styles.button} ${className || ''}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
