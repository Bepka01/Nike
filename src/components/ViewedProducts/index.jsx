import Typography from '../ui/Typography/index';
import ViewedProductCard from './viewedProductCard';
import style from './style.module.scss';
import Icon from '../ui/Icon/index';

const ViewedProducts = () => {
  return (
    <div className={style.viewedProducts}>
      <div className={style.viewedProductsHeader}>
        <Typography variant="small-title">История просмотров</Typography>

        <div className={style.navigation}>
          <Icon name="dropDownArrow" />
          <Icon name="dropDownArrow" color="black" />
        </div>
      </div>

      <div className={style.productsContainer}>
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
      </div>
    </div>
  );
};

export default ViewedProducts;
