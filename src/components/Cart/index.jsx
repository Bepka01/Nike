import Icon from '../ui/Icon';
import style from './style.module.scss';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import CartCard from './CartCard';
import { productsCart } from './CartCard/mock';
import { useState, useMemo } from 'react';

const Card = ({ activeBasket, onClick }) => {
  const [products, setProducts] = useState(productsCart);

  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => {
      return total + Number(product.price.replace(' ₽', '')) * product.count;
    }, 0);
  }, [products]);

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
          <CartCard products={products} setProducts={setProducts} />
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
