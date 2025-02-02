import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
// Paginationモジュールをインポート
import { Pagination } from 'swiper/modules';
import styles from "../styles/Swiper.module.css";

const Swiper2 = ({data}) => {
  return (
    <>
      <Swiper
            className={styles.Swiper2}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            wrapperClass="ul-blog"
            autoplay={true}
            loop={true}
            modules={[Pagination]}
            pagination={{
              clickable: true
            }}
      >
          {data.map((blog,i) => (
            <SwiperSlide key={blog.id}>
                <figure>
                <Link href={`/blog/${blog.id}`}>
                <img className={styles.image} src={blog.image.url}/>
                </Link>
                </figure>
                <figcaption>
                <Link href={`/blog/${blog.id}`}>
                    <h3>{blog.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: blog.detail }} />
                </figcaption>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Swiper2;