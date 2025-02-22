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
            className='Swiper2'
            spaceBetween={15}
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
            breakpoints={{
              767: {
                slidesPerView: 1,
                spaceBetween: 50
              },
              450: {
                slidesPerView: 1,
                spaceBetween: 15
              }
            }}
      >
          {data.map((blog,i) => (
            <SwiperSlide key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                <figure>
             
                {blog.image && blog.image.url && (
                  <img className={styles.img} src={blog.image.url} alt={blog.title} />
                )}
                
                </figure>
                <figcaption>
                    <h3>{blog.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: blog.detail }} />
                </figcaption>
                </Link>
            </SwiperSlide>
          ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      </Swiper>

    </>
  );
};

export default Swiper2;