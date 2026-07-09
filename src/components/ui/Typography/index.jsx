import style from './style.module.scss';
import cn from 'classnames';

const Typography = ({
  tag: Tag = 'p',
  fontFamily = 'aeroport',
  variant,
  className,
  children,
}) => {
  return (
    <Tag
      className={cn(
        style.typography,
        style[variant],
        style[fontFamily],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
