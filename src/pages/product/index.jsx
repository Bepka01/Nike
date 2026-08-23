import ProductGallery from '../../components/ProductGallery/index';
import ProductInfo from '../../components/ProductInfo/index';
import ViewedProducts from '../../components/ViewedProducts/index';

import style from './style.module.scss';
import { product } from './mock';

const Product = () => {
  return (
    <>
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

      <ViewedProducts />
    </>
  );
};

export default Product;
