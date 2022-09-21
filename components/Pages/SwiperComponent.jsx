import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

import styles from '../../styles/swiper-styles.module.css';

// import required modules
const photos = [
  {
    title: 'test naslov 1',
    bg: '/animals/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg',
  },
  {
    title: 'test naslov 2',
    bg: '/animals/marko-blazevic-zBvVuRJ71vU-unsplash.jpg',
  },
  {
    title: 'test naslov 3',
    bg: '/animals/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg',
  },
];

const SwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      loopAdditionalSlides
      grabCursor={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={styles.swiper}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <img src='/animals/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg' alt='' />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img src='/animals/marko-blazevic-zBvVuRJ71vU-unsplash.jpg' alt='' />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img src='/animals/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg' alt='' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;

// Import Swiper React components
