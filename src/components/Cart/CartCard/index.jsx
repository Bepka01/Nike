import style from './style.module.scss';
import CartCardItem from '../CartCardItem';

const CartCard = ({
  products,
  updateProductCount,
  deleteProduct,
}) => {
  return (
    <div className={style.cardsContainer}>
      {products.map((product) => (
        <CartCardItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          updateProductCount={updateProductCount}
        />
      ))}
    </div>
  );
};

export default CartCard;
