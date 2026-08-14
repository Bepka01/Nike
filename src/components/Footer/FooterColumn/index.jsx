import style from './style.module.scss';
import { Link } from 'react-router-dom';

const FooterColumn = ({ title, links, path }) => {
  return (
    <div className={style.column}>
      <h2 className={style.columnTitle}>{title}</h2>
      {links.map((link) => {
        return (
          <Link
            className={style.link}
            to={`/footer/${path}/${link.path}`}
            key={link.path}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterColumn;
