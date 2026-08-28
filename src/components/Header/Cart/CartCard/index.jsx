import style from './style.module.scss';
import CartCardItem from '../CartCardItem';

const CartCard = ({ products, setProducts }) => {
  return (
    <div className={style.cardsContainer}>
      {products.map((product) => (
        <CartCardItem
          key={product.id}
          product={product}
          setProducts={setProducts}
        />
      ))}
    </div>
  );
};

export default CartCard;
