import style from './style.module.scss';
import cn from 'classnames';

const Input = ({ variant, type = 'text', ...props }) => {
  return (
    <input {...props} type={type} className={cn(style.input, style[variant])} />
  );
};

export default Input;
