import Icon from '../../ui/Icon';
import style from './style.module.scss';

const FooterIcons = () => {
  return (
    <div className={style.footerIcons}>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Icon name="inst" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Icon name="vk" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Icon name="facebook" />
      </a>
    </div>
  );
};

export default FooterIcons;
