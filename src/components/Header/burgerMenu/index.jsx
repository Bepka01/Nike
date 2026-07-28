import { Link } from 'react-router-dom';
import Typography from '../../ui/Typography';
import Icon from '../../ui/Icon';
import cn from 'classnames';
import style from './style.module.scss';

const BurgerMenu = ({ activeMenu, toggleMenu, menu }) => {
  return (
    <div className={style.burgerNavigation}>
      {menu.map((mapItem) => (
        <div key={mapItem.id}>
          <div
            className={style.burgerMenu}
            onClick={() => toggleMenu(mapItem.id)}
          >
            <Typography variant="menu">{mapItem.title}</Typography>

            <div
              className={cn(style.arrow, {
                [style.arrowOpen]: activeMenu === mapItem.id,
              })}
            >
              <Icon name="dropDownArrow" />
            </div>
          </div>

          {activeMenu === mapItem.id && (
            <ul className={style.list}>
              {mapItem.items.map((item) => (
                <li key={item.path} className={style.item}>
                  <Typography variant="header-menu">
                    <Link
                      onClick={() => toggleMenu(item.id)}
                      to={`/${mapItem.path}/${item.path}`}
                    >
                      {item.title}
                    </Link>
                  </Typography>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default BurgerMenu;
