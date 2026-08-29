import style from './style.module.scss';
import CartCardItem from '../CartCardItem';

const CartCard = ({ products, setProducts }) => {
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const updateProductCount = (id, callback) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: callback(product.count),
            }
          : product
      )
    );
  };

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
