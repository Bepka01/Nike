import Icon from '../ui/Icon';
import style from './style.module.scss';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import CartList from './CartList';
import { productsCart } from './CartList/mock';
import { useState, useMemo } from 'react';

const Card = ({ activeBasket, onClick }) => {
  const [products, setProducts] = useState(productsCart);

    const totalPrice = useMemo(() => {
    return products.reduce((total, product) => {
      return total + Number(product.price.replace(' ₽', '')) * product.count;
    }, 0);
  }, [products]);

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const increaseProductCount = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count + 1,
            }
          : product
      )
    );
  };
  ``;

  const decreaseProductCount = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: product.count - 1,
            }
          : product
      )
    );
  };



  return (
    <div>
      <Icon name="trash" onClick={onClick} />

      <div
        className={`${style.basketContainer} ${
          activeBasket ? style.active : ''
        }`}
      >
        <div className={style.headerBasket}>
          <Typography tag="h2" variant="section-title">
            Корзина
          </Typography>

          <Icon name="burgerClose" onClick={onClick} />
        </div>

        <div className={style.basketContent}>
          <CartList
            decreaseProductCount={decreaseProductCount}
            increaseProductCount={increaseProductCount}
            deleteProduct={deleteProduct}
            products={products}
          />
        </div>

        <div className={style.footerBasket}>
          <Typography>Предварительный итог : {totalPrice}</Typography>
          <Button variant="basket">Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
