import style from './style.module.scss';
import cn from 'classnames';

const Input = ({ variant, type, ...props }) => {
  return (
    <input {...props} className={cn(style.input, style[variant])} type={type} />
  );
};

export default Input;
