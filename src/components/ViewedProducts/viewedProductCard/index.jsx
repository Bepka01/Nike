import style from './style.module.scss';

const ViewedProductCard = ({ img, title, price }) => {
  return (
    <div className={style.viewedProductCard}>
      <img src={img} alt={title} />
      <div className={style.aboutCard}>
        <p className={style.titleCard}>{title}</p>
        <p className={style.PriceCard}>{price}</p>
      </div>
    </div>
  );
};

export default ViewedProductCard;
