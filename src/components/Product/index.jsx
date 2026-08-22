import ProductGallery from '../ProductGallery';
import ProductInfo from '../ProductInfo';
import style from './style.module.scss';

const Product = () => {
  return (
    <div className={style.productContainer}>
      <ProductGallery />
      <ProductInfo />
    </div>
  );
};
export default Product;
