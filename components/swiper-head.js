import {Swiper,SwiperSlide} from 'swiper/react';
// import styles from "../styles/header/Header.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';
// Paginationモジュールをインポート
import { Pagination } from 'swiper/modules';

const Swiper1 = ({image}) => {
  return (
    <>
      <Swiper
            className='Swiper1'
            spaceBetween={500}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
            pagination={{
              clickable: false
            }}
            loop={true}
      >
          {image.map((img,i) => (
            <SwiperSlide key={'head_'+i}>
                <img src={img} /> 
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Swiper1;