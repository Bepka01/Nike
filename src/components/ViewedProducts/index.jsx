import Typography from '../ui/Typography/index';
import ViewedProductCard from './viewedProductCard';
import style from './style.module.scss';
import Icon from '../ui/Icon/index';
import Slider from '../Slider';
import { SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { viewedProducts } from '../../mock';

const ViewedProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={style.viewedProducts}>
      <div className={style.viewedProductsHeader}>
        <Typography variant="small-title">История просмотров</Typography>

        <div className={style.navigation}>
          <Icon ref={prevRef} name="dropDownArrow" className={style.left} />
          <Icon ref={nextRef} name="dropDownArrow" className={style.right} />
        </div>
      </div>

      <Slider prevEl={prevRef} nextEl={nextRef}>
        {viewedProducts.map((card) => {
          return (
            <SwiperSlide>
              <ViewedProductCard
                img={card.image}
                title={card.title}
                price={card.price}
                key={card.id}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

export default ViewedProducts;
