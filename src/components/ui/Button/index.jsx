import styles from './style.module.scss';
import cn from 'classnames';

const Button = ({ variant, children, ...props }) => {
  return (
    <button {...props} className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  );
};

export default Button;
