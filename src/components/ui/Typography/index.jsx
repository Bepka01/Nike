import style from './style.module.scss';
import cn from 'classnames';

const Typography = ({ tag: Tag = 'p', variant, className, children }) => {
  return (
    <Tag className={cn(style.typography, style[variant], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
