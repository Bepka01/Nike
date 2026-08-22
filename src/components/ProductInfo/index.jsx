import style from './style.module.scss';

import Button from '../ui/Button/index';
import Typography from '../ui/Typography';

const ProductInfo = () => {
  return (
    <div className={style.productInfoContainer}>
      <Typography className={style.productInfoPath} variant="small-text">
        Главная / Одежда/ Худи и свитшоты / Худи/ Свитшот Nike
      </Typography>

      <div className={style.productTitle}>
        <h2>Свитшот Nike</h2>
        <div className={style.productInfoPrice}>
          <Typography className={style.oldPrice} variant="small-text">
            3500 ₽
          </Typography>
          <Typography className={style.newPrice}>2900 ₽</Typography>
        </div>
      </div>

      <div className={style.btnsSizeContainer}>
        <Typography variant="bold">Размер :</Typography>
        <div className={style.btnsSize}>
          <Button variant="size">s</Button>
          <Button variant="size">m</Button>
          <Button variant="size">l</Button>
          <Button variant="size">xl</Button>
        </div>
      </div>

      <div className={style.btnsColorContainer}>
        <Typography variant="bold">Цвет :</Typography>
        <div className={style.btnsColor}>
          <Button variant="color">Черный</Button>
          <Button variant="color">Синий</Button>
          <Button variant="color">Красный</Button>
        </div>
      </div>

      <div className={style.counterAndTrash}>
        <Button variant="color"> - 1 +</Button>
        <Button variant="trash">В корзину</Button>
      </div>

      <div className={style.aboutProduct}>
        <span className={style.bold}>
          Свитшот оверсайз со спущенной линией плеча.
        </span>
        <Typography>
          <Typography variant="bold">Состав: </Typography> 80% хлопок, 20%
          полиэстер.
        </Typography>
        <Typography>
          <span className={style.bold}>
            Рекомендация по уходу: <br />
          </span>
          Только ручная стирка при температуре не выше 30 градусов, нейтральными
          моющими средствами; не тереть; не отжимать; отбеливание запрещено; не
          стирать моющими средствами содержащие отбеливатель; химчистка
          запрещена; гладить при низкой температуре до 100 градусов; сушить в
          тени на горизонтальной поверхности.
        </Typography>
      </div>
    </div>
  );
};

export default ProductInfo;
