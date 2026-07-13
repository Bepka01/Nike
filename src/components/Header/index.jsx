import Icon from '../ui/Icon';
import Typography from '../ui/Typography';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Icon name="nike" color="black" />
      <div className={style.dropDownHeader}>
        <Typography variant="header-menu">Одежда</Typography>
        <Typography variant="header-menu">Аксессуары</Typography>
        <Typography variant="header-menu">Коллекции</Typography>
      </div>
      <div className={style.headerActions}>
        <Icon name="glass" />
        <Icon name="trash" />
      </div>
    </header>
  );
};

export default Header;
