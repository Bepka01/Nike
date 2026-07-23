import style from './style.module.scss';
import Typography from '../../ui/Typography';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '../../ui/Icon';

const MenuItem = ({
  title,
  isOpen,
  items,
  activeMenu,
  toggleMenu,
  className,
}) => {
  return (
    <div className={style.menuItem}>
      <Typography variant="header-menu" onClick={() => toggleMenu(isOpen)}>
        {title} <Icon name="drowDownArrow" />
      </Typography>

      {activeMenu === isOpen && (
        <div className={cn(style.dropDown, className)}>
          {items.map((item) => {
            return (
              <Link key={item.path} to={`/${item.path}`}>
                <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
