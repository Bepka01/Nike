import style from './style.module.scss';
import CartCardItem from '../CartCardItem';

const CartList = ({
  decreaseProductCount,
  increaseProductCount,
  products,

  deleteProduct,
}) => {
  return (
    <div className={style.cardsContainer}>
      {products.map((product) => (
        <CartCardItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          decreaseProductCount={() => decreaseProductCount(product.id)}
          increaseProductCount={() => increaseProductCount(product.id)}
        />
      ))}
    </div>
  );
};

export default CartList;
