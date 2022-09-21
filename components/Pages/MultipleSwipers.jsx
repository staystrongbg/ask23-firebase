// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';
import { SwiperProizvod } from '../';

const MultipleSwipers = ({ products }) => {
  return (
    <Swiper
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      slidesPerView={3}
      breakpoints={{
        // when window width is >= 1536px
        1536: {
          width: 1536,
          slidesPerView: 5,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
          spaceBetween: 1,
        },
        // when window width is >= 768px
        320: {
          // width: 400,
          slidesPerView: 1,
          spaceBetween: 1,
        },
      }}
      modules={[Navigation, Autoplay]}
      className='mySwiper '
    >
      {products.map((p, idx) => (
        <SwiperSlide
          key={idx}
          className=' w-0 select-none pb-12 flex items-center justify-center '
        >
          <SwiperProizvod {...p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultipleSwipers;
