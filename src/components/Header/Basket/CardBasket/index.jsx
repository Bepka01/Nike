import style from './style.module.scss';
import Counter from '../../../ui/Counter';
import Typography from '../../../ui/Typography';
import Icon from '../../../ui/Icon';

const CardBasket = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className={style.cardsContainer}>
      {products.map((product) => (
        <div className={style.card} key={product.id}>
          <div className={style.cardPhoto}>
            <img src={product.image} alt={product.title} />
          </div>

          <div className={style.cardInfo}>
            <div className={style.cardTop}>
              <Typography>{product.title}</Typography>
              <Icon
                onClick={() => deleteProduct(product.id)}
                name="burgerClose"
              />
            </div>

            <div className={style.cardBottom}>
              <Counter
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
                className={style.counterBasket}
              />

              <Typography>{product.price}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBasket;
