import { useState } from 'react';
import Icon from '../ui/Icon';
import Typography from '../ui/Typography';
import style from './style.module.scss';

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

          <div
            onClick={() => {
              setBurger(!activeBurger);
              console.log(activeBurger);
            }}
            className={`${style.burgerMenu} ${activeBurger ? style.burgerOpen : ''}`}
          >
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
            <div className={style.burgerLine}></div>
          </div>
        </div>

        <div className={style.headerCenter}>
          <Icon name="nike" color="black" className={style.logoMobile} />

          <nav className={style.navigation}>
            <div className={style.menuItem}>
              <Typography
                variant="header-menu"
                onClick={() => toggleMenu('clothes')}
              >
                Одежда
              </Typography>

              {activeMenu === 'clothes' && (
                <div className={style.dropdown}>
                  <p>Кроссовки</p>
                  <p>Футболки</p>
                  <p>Шорты</p>
                </div>
              )}
            </div>

            <div className={style.menuItem}>
              <Typography
                variant="header-menu"
                onClick={() => toggleMenu('accessories')}
              >
                Аксессуары
              </Typography>

              {activeMenu === 'accessories' && (
                <div className={style.dropdown}>
                  <p>Рюкзаки</p>
                  <p>Носки</p>
                  <p>Кепки</p>
                </div>
              )}
            </div>

            <div className={style.menuItem}>
              <Typography
                variant="header-menu"
                onClick={() => toggleMenu('collections')}
              >
                Коллекции
              </Typography>

              {activeMenu === 'collections' && (
                <div className={style.dropdown}>
                  <p>Jordan</p>
                  <p>Air Max</p>
                  <p>Running</p>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className={style.headerRight}>
          <Icon name="glass" className={style.search} />
          <Icon name="trash" />
        </div>
      </header>

      {activeBurger && (
        <div className={style.burgerNavigation}>
          <Typography className={style.headerMenuMobile} variant="header-menu">
            Одежда
          </Typography>
          <Typography variant="header-menu">Аксессуары</Typography>
          <Typography variant="header-menu">Коллекции</Typography>
        </div>
      )}
    </>
  );
};

export default Header;
