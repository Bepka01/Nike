import styles from './style.module.scss';
import cn from 'classnames';

const Input = ({ variant, ...props }) => {
  return (
    <input
      {...props}
      type="text"
      className={cn(styles.input, styles[variant])}
    />
  );
};

export default Input;
