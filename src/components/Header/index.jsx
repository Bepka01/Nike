import { useState } from 'react';
import Icon from '../ui/Icon';
import Typography from '../ui/Typography';
import style from './style.module.scss';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeBurger, setBurger] = useState(false);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.headerLeft}>
          <Icon name="nike" color="black" className={style.logoDesktop} />

          <Icon
            name={activeBurger ? 'burgerClose' : 'burger'}
            onClick={() => {
              setBurger(!activeBurger);
            }}
            className={`${style.burger} ${activeBurger ? style.open : ''}`}
          />
        </div>

        <div className={style.headerCenter}>
          <Icon name="nike" color="black" className={style.logoMobile} />

          <nav className={style.navigation}>
            <MenuItem
              isOpen="clothes"
              title="Одежда"
              items={['Кроссовки', 'Футболки', 'Шорты']}
              activeMenu={activeMenu}
              toggleMenu={toggleMenu}
            />

            <MenuItem
              isOpen="accessories"
              title="Аксессуары"
              items={['Рюкзаки', 'Носки', 'Кепки']}
              activeMenu={activeMenu}
              toggleMenu={toggleMenu}
            />

            <MenuItem
              isOpen="collections"
              title="Коллекции"
              items={['Jordan', 'Air Max', 'Running']}
              activeMenu={activeMenu}
              toggleMenu={toggleMenu}
            />
          </nav>
        </div>

        <div className={style.headerRight}>
          <Icon name="glass" className={style.search} />
          <Icon name="trash" />
        </div>
      </header>

      {activeBurger && (
        <div className={style.burgerNavigation}>
          <MenuItem
            className={style.burgerMenuItem}
            isOpen="clothes"
            title="Одежда"
            items={['Кроссовки', 'Футболки', 'Шорты']}
            activeMenu={activeMenu}
            toggleMenu={toggleMenu}
          />
          <MenuItem
            className={style.burgerMenuItem}
            isOpen="accessories"
            title="Аксессуары"
            items={['Рюкзаки', 'Носки', 'Кепки']}
            activeMenu={activeMenu}
            toggleMenu={toggleMenu}
          />

          <MenuItem
            className={style.burgerMenuItem}
            isOpen="collections"
            title="Коллекции"
            items={['Jordan', 'Air Max', 'Running']}
            activeMenu={activeMenu}
            toggleMenu={toggleMenu}
          />
        </div>
      )}
    </>
  );
};

export default Header;
