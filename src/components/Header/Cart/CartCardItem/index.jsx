import style from './style.module.scss';
import Counter from '../../../ui/Counter';
import Typography from '../../../ui/Typography';
import Icon from '../../../ui/Icon';

const CartCardItem = ({ product, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

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
            setCount={(callback) => {
              setProducts((prevProducts) =>
                prevProducts.map((item) =>
                  item.id === product.id
                    ? {
                        ...item,
                        count: callback(item.count),
                      }
                    : item
                )
              );
            }}
          />

          <Typography>{product.price}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CartCardItem;
