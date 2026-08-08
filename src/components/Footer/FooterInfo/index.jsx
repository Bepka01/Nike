import { Link } from 'react-router-dom';
import style from './style.module.scss';

const FooterInfo = () => {
  return (
    <div className={style.footerInfo}>
      <p>© Nike, Inc., 2020. Все права защищены.</p>

      <div className={style.links}>
        <Link to="/catalog">Каталог</Link>
        <Link to="/terms">Условия использования</Link>
        <Link to="/sales">Условия продажи</Link>
        <Link to="/privacy">Конфиденциальность и файлы cookie</Link>
      </div>
    </div>
  );
};

export default FooterInfo;
