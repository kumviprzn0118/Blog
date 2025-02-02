import {Swiper,SwiperSlide} from 'swiper/react';
// import styles from "../styles/header/Header.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';
// Paginationモジュールをインポート
import { Pagination } from 'swiper/modules';
import styles from "../styles/Swiper.module.css";

const Swiper1 = ({image}) => {
  return (
    <>
      <Swiper
            className={styles.Swiper1}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination]}
            pagination={{
              type: "fraction",
            }}
            loop={true}
      >
          {image.map((img,i) => (
            <SwiperSlide className={styles.SwiperSlide} key={'head_'+i}>
                <img className={styles.image} src={img} /> 
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Swiper1;