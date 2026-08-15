import style from './style.module.scss';

const ViewedProductCard = () => {
  return (
    <div>
      <img src="" alt="" />
      <div className={style.aboutCard}>
        <p className={style.titleCard}>Nike Air Max 270 React ENG</p>
        <p className={style.PriceCard}>2320 ₽</p>
      </div>
    </div>
  );
};

export default ViewedProductCard;
