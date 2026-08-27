import style from './style.module.scss';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { trashProducts } from './mock';
import Counter from '../../components/ui/Counter';

const Trash = () => {
  const [products, setProducts] = useState(trashProducts);

  const changeCount = (id, updateCount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count:
                typeof updateCount === 'function'
                  ? updateCount(product.count)
                  : updateCount,
            }
          : product
      )
    );
  };

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

  return (
    <div className={style.trashContainer}>
      <div className={style.trashHeader}>
        <Typography tag="h2">Корзина</Typography>

        <Link to="/">
          <Button variant="close">×</Button>
        </Link>
      </div>

      <div className={style.cardTrash}>
        {products.map((product) => {
          return (
            <div className={style.productCard} key={product.id}>
              <img src={product.image} alt={product.title} />

              <div className={style.productInfo}>
                <Typography>{product.title}</Typography>

                <Typography variant="gray">{product.size}</Typography>

                <div className={style.productControls}>
                  <Counter
                    count={product.count}
                    setCount={(updateCount) =>
                      changeCount(product.id, updateCount)
                    }
                    className={style.smallCounter}
                  />

                  <Typography variant="bold">
                    {product.price * product.count} ₽
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.trashFooter}>
        <Typography tag="p" variant="bold">
          Предварительный итог: {totalPrice} ₽
        </Typography>

        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default Trash;
