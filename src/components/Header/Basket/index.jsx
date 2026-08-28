import Icon from '../../ui/Icon';
import style from './style.module.scss';
import Typography from '../../ui/Typography';
import Button from '../../ui/Button';
import CardBasket from './CardBasket';
import { ProductsBasket } from './CardBasket/mock';
import { useState, useMemo } from 'react';

const Basket = ({ activeBasket, onClick }) => {
  const [products, setProducts] = useState(ProductsBasket);

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
        <div>
          <CardBasket products={products} setProducts={setProducts} />
        </div>
        <div className={style.footerBasket}>
          <Typography>Предварительный итог : {totalPrice}</Typography>
          <Button variant="basket">Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
