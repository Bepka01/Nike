import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import style from './style.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const breakpointsForSliderViewed = {
  600: {
    slidesPerView: 2,
  },
  900: {
    slidesPerView: 3,
  },
  1100: {
    slidesPerView: 4,
  },
};

const Slider = ({ children, prevEl, nextEl }) => {
  return (
    <Swiper
      className={style.slider}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={breakpointsForSliderViewed}
      navigation={{
        prevEl: prevEl.current,
        nextEl: nextEl.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevEl.current;
        swiper.params.navigation.nextEl = nextEl.current;
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
