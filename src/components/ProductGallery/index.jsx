import style from './style.module.scss';

import { photosGallery } from './mock';
import Icon from '../ui/Icon';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import { useEffect, useState } from 'react';

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [bigSwiper, setBigSwiper] = useState(null);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 767px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className={style.productGalletyContainer}>
      <div className={style.bigPhotosWrapper}>
        <Icon
          name="dropDownArrow"
          className={style.arrowLeft}
          onClick={() => bigSwiper?.slidePrev()}
        />

        <Swiper
          className={style.bigPhotos}
          loop={true}
          onSwiper={setBigSwiper}
          spaceBetween={10}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          modules={[Thumbs]}
        >
          {photosGallery.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img src={photo.image} alt="photo" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Icon
          name="dropDownArrow"
          className={style.arrowRight}
          onClick={() => bigSwiper?.slideNext()}
        />
      </div>

      <Swiper
        key={isMobile ? 'horizontal' : 'vertical'}
        className={style.smallPhoto}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        direction={isMobile ? 'horizontal' : 'vertical'}
      >
        {photosGallery.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img src={photo.image} alt="photo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductGallery;
