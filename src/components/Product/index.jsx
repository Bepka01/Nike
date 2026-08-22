import ProductGallery from '../ProductGallery';
import ProductInfo from '../ProductInfo';
import style from './style.module.scss';
import { product } from './mock';

const Product = () => {
  return (
    <div className={style.productContainer}>
      <ProductGallery />
      <ProductInfo
        breadCrumbs={product.breadcrumbs}
        price={product.price}
        title={product.title}
        oldPrice={product.oldPrice}
        sizes={product.sizes}
        colors={product.colors}
        description={product.description}
      />
    </div>
  );
};
export default Product;
