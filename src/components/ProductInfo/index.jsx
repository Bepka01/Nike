import style from './style.module.scss';

import Button from '../ui/Button/index';
import Typography from '../ui/Typography';
import BreadCrumbs from '../Breadcrumbs';

const ProductInfo = ({
  price,
  title,
  oldPrice,
  sizes,
  colors,
  description,
  breadCrumbs,
}) => {
  return (
    <div className={style.productInfoContainer}>
      <BreadCrumbs items={breadCrumbs}></BreadCrumbs>

      <div className={style.productTitle}>
        <h2>{title}</h2>
        <div className={style.productInfoPrice}>
          <Typography className={style.oldPrice} variant="small-text">
            {oldPrice}
          </Typography>
          <Typography className={style.newPrice}>{price}</Typography>
        </div>
      </div>

      <div className={style.btnsSizeContainer}>
        <Typography variant="bold">Размер :</Typography>
        <div className={style.btnsSize}>
          {sizes.map((size) => {
            return (
              <Button key={size} variant="size">
                {size}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={style.btnsColorContainer}>
        <Typography variant="bold">Цвет :</Typography>
        <div className={style.btnsColor}>
          {colors.map((color) => {
            return (
              <Button key={color} variant="color">
                {color}
              </Button>
            );
          })}
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
          <span className={style.bold}> Состав:</span> 80% хлопок, 20%
          полиэстер.
        </Typography>
        <Typography>
          <span className={style.bold}>
            Рекомендация по уходу: <br />
          </span>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ProductInfo;
