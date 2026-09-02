import { useState } from 'react';
import Icon from '../ui/Icon';

import { menu } from '../../constants.js';

import style from './style.module.scss';
import MenuItem from './MenuItem';
import Card from '../Cart/index.jsx';
import BurgerMenu from './BurgerMenu/index.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeBurger, setBurger] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);

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
          <Link to="/">
            <Icon name="nike" color="black" className={style.logoDesktop} />
          </Link>

          <Icon
            name={activeBurger ? 'burgerClose' : 'burger'}
            onClick={() => {
              setBurger(!activeBurger);
            }}
            className={`${style.burger} ${activeBurger ? style.open : ''}`}
          />
        </div>

        <div className={style.headerCenter}>
          <Link to="/">
            <Icon name="nike" color="black" className={style.logoMobile} />
          </Link>

          <nav className={style.navigation}>
            {menu.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                activeMenu={activeMenu}
                toggleMenu={toggleMenu}
              />
            ))}
          </nav>
        </div>

        <div className={style.headerRight}>
          <Icon name="glass" className={style.search} />
          <Card
            activeBasket={activeBasket}
            onClick={() => {
              setActiveBasket(!activeBasket);
            }}
          />
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
