import style from './style.module.scss';
import FooterColumn from './FooterColumnё';
import FooterIcons from './FooterIcons';
import { footerColumns } from '../../constants';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerColumns}>
          {footerColumns.map((column) => {
            return (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
                path={column.path}
              />
            );
          })}
        </div>
        <FooterIcons />
      </div>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
