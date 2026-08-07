import { Link } from 'react-router-dom';
import { footerColumns } from '../../../constants';
import style from './style.module.scss';

const FooterInfo = () => {
  const info = footerColumns.find((item) => item.path === 'info');

  return (
    <div className={style.footerInfo}>
      <p>© Nike, Inc., 2020. Все права защищены.</p>

      <div className={style.links}>
        {info.links.map(({ title, path }) => (
          <Link key={path} to={`/footer/${info.path}/${path}`}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
