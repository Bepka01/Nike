import style from './style.module.scss';
import Typography from '../../ui/Typography';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '../../ui/Icon';

const MenuItem = ({ item, activeMenu, toggleMenu, className }) => {
  return (
    <div className={style.menuItem}>
      <Typography variant="header-menu" onClick={() => toggleMenu(item.id)}>
        <span>{item.title}</span>

        <Icon
          name="dropDownArrow"
          className={cn(style.arrow, {
            [style.arrowOpen]: activeMenu === item.id,
          })}
        />
      </Typography>

      {activeMenu === item.id && (
        <div className={cn(style.dropDown, className)}>
          {item.items.map((link) => (
            <Link
              onClick={() => toggleMenu(item.id)}
              key={link.path}
              to={`/${item.path}/${link.path}`}
            >
              <p>{link.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
