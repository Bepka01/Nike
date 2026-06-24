import styles from './Input.module.scss';

const Input = ({ className, ...props }) => {
  return (
    <input {...props} type="text" className={`${styles.Input} ${className}`} />
  );
};

export default Input;
