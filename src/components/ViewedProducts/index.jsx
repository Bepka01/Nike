import Typography from '../ui/Typography/index';
import ViewedProductCard from './viewedProductCard';
import style from './style.module.scss';
import Icon from '../ui/Icon/index';
import { useState } from 'react';

const ViewedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className={style.viewedProducts}>
      <div className={style.viewedProductsHeader}>
        <Typography variant="small-title">История просмотров</Typography>

        <div className={style.navigation}>
          <Icon
            onClick={handlePrev}
            name="dropDownArrow"
            className={style.left}
          />
          <Icon
            onClick={handleNext}
            name="dropDownArrow"
            className={style.right}
          />
        </div>
      </div>

      <div className={style.productsContainer}>
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
        <ViewedProductCard />
      </div>
    </div>
  );
};

export default ViewedProducts;
