import style from './style.module.scss';
import photo from '../../../assets/img/viewedCard.png';

const ViewedProductCard = () => {
  return (
    <div className={style.viewedProductCard}>
      <img src={photo} alt="foto" />
      <div className={style.aboutCard}>
        <p className={style.titleCard}>Nike Air Max 270 React ENG</p>
        <p className={style.PriceCard}>2320 ₽</p>
      </div>
    </div>
  );
};

export default ViewedProductCard;
