import style from './style.module.scss';
import cn from 'classnames';

const Input = ({ variant, ...props }) => {
  return (
    <input
      {...props}
      type="text"
      className={cn(style.input, style[variant])}
    />
  );
};

export default Input;
