import { useState } from 'react';
import Icon from '../ui/Icon';

import style from './style.module.scss';
import MenuItem from './MenuItem';

import BurgerMenu from './burgerMenu';

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
              items={[
                { title: 'Кроссовки', path: 'Sneakers' },
                { title: 'Футболки', path: 'T-shirts' },
                { title: 'Шорты', path: 'shorts' },
              ]}
              activeMenu={activeMenu}
              toggleMenu={toggleMenu}
            />

            <MenuItem
              isOpen="accessories"
              title="Аксессуары"
              items={[
                { title: 'Рюкзаки', path: 'backpacks' },
                { title: 'Носки', path: 'socks' },
                { title: 'Кепки', path: 'caps' },
              ]}
              activeMenu={activeMenu}
              toggleMenu={toggleMenu}
            />

            <MenuItem
              isOpen="collections"
              title="Коллекции"
              items={[
                { title: 'Jordan', path: 'jordan' },
                { title: 'Air Max', path: 'air-max' },
                { title: 'Running', path: 'running' },
              ]}
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
        <BurgerMenu toggleMenu={toggleMenu} activeMenu={activeMenu} />
      )}
    </>
  );
};

export default Header;
