import style from './style.module.scss';
import cn from 'classnames';

const Button = ({ variant, children, ...props }) => {
  return (
    <button {...props} className={cn(style.button, style[variant])}>
      {children}
    </button>
  );
};

export default Button;
