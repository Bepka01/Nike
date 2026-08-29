import style from './style.module.scss';
import Counter from '../../ui/Counter';
import Typography from '../../ui/Typography';
import Icon from '../../ui/Icon';

const MIN_COUNT = 0;
const MAX_COUNT = 15;

const CartCardItem = ({ product, deleteProduct, updateProductCount }) => {
  return (
    <div className={style.card}>
      <div className={style.cardPhoto}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={style.cardInfo}>
        <div className={style.cardTop}>
          <Typography>{product.title}</Typography>

          <Icon
            className={style.btnClose}
            onClick={() => deleteProduct(product.id)}
            name="burgerClose"
          />
        </div>

        <div className={style.cardBottom}>
          <Counter
            className={style.counterCart}
            count={product.count}
            minCount={MIN_COUNT}
            maxCount={MAX_COUNT}
            increase={() =>
              updateProductCount(product.id, (count) => count + 1)
            }
            decrease={() =>
              updateProductCount(product.id, (count) => count - 1)
            }
          />

          <Typography>{product.price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CartCardItem;
