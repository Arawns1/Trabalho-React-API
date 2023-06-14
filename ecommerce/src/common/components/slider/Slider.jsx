// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '/assets/banner/b2.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export function Slider() {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider-swaper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
