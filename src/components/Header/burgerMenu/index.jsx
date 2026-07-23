import MenuItem from '../MenuItem';
import style from './style.module.scss';

const BurgerMenu = ({ activeMenu, toggleMenu }) => {
  return (
    <div className={style.burgerNavigation}>
      <MenuItem
        className={style.burgerMenuItem}
        isOpen="clothes"
        title="Одежда"
        items={[
          { title: 'Кроссовки', path: 'sneakers' },
          { title: 'Футболки', path: 't-shirts' },
          { title: 'Шорты', path: 'shorts' },
        ]}
        activeMenu={activeMenu}
        toggleMenu={toggleMenu}
      />

      <MenuItem
        className={style.burgerMenuItem}
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
        className={style.burgerMenuItem}
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
    </div>
  );
};

export default BurgerMenu;
