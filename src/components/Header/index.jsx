import { useState } from 'react';
import Icon from '../ui/Icon';

import { menu } from '../../constants';

import style from './style.module.scss';
import MenuItem from './MenuItem';

import BurgerMenu from './burgerMenu';
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
            {menu.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  isOpen={item.id}
                  title={item.title}
                  items={item.items}
                  activeMenu={activeMenu}
                  toggleMenu={toggleMenu}
                />
              );
            })}
          </nav>
        </div>

        <div className={style.headerRight}>
          <Icon name="glass" className={style.search} />
          <Link to="/trash">
            <Icon name="trash" />
          </Link>
        </div>
      </header>

      {activeBurger && (
        <BurgerMenu
          toggleMenu={toggleMenu}
          activeMenu={activeMenu}
          menu={menu}
        />
      )}
    </>
  );
};

export default Header;
