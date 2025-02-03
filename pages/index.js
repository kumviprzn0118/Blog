import Head from "next/head";
import Header from '../components/header';
import Swiper1 from '../components/swiper-head';
import Swiper2 from '../components/swiper-blog';
import styles from "../styles/Home.module.css";
import $ from 'jquery'
import { useEffect } from 'react';
import { client } from "../libs/client";
import Link from 'next/link';
// import { Swiper, SwiperSlide } from "swiper";
import { motion } from 'framer-motion';
// import AnimatePresence from 
export default function Home({ blog,category }) {
  useEffect(() => {
    $('[class*="Home_news_time"]').each(function(){
      $(this).html($(this).html().slice(0, 10));
  })
   }, []);
  return (
    <>
    <div className={styles.all_wrap}>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <ul>
          <Swiper1 image={["./img/jiko2.png","./img/jiko2.png","./img/jiko2.png"]}></Swiper1>
        </ul>
      <div className={styles.contents_wrap}>
        <div className={styles.main_content}>
          <div className={styles.content}>
          <div className={styles.blog_wrapper}>
            <Swiper2 data={blog}></Swiper2>
          </div>
            <h1 className={styles.h1}>プロフィール</h1>
            <p className={styles.p}>
              はじめまして。Kumaといいます。<br/>
              プロフィールを見ていただき、ありがとうございます。<br/>
              自己紹介をさせていただきます。
            </p>
            <div className={styles.simplebox1}>
              <p>名前 : Kuma</p>
              <p>年齢 : 20代後半</p>
              <p>出身 : 宮崎</p>
              <p>職業 : Web開発エンジニア</p>
              <p>趣味 : スポーツ観戦・プログラミング・数学</p>
            </div>
          </div>
        </div>
        <div className={styles.side_content}>
        <div className={styles.content}>
            <h1 className={styles.h1}> 最近の投稿</h1>
            <ul className={styles.ul}>
              {blog.map((blog) => (
                <li className={styles.li} key={blog.id}>
                  <Link className={styles.link} href={`/blog/${blog.id}`}>
                  <div className={styles.blog_img} style={{backgroundImage: `url(${blog.image.url})`}}></div>
                  <div className={styles.blog_title}>{blog.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <a className={styles.motto} href="/blog/list">もっとみる</a>
          </div>
          <div className={styles.content}>
            <h1 className={styles.h1}>カテゴリー</h1>
            <ul className="category_ul">
              {category.map((category) => (
                <li className="category_list li" key={category.id}>
                  <Link href={`/category/${category.id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </main>
    </div>
    </>
  );
}
export const getStaticProps = async (context) => {

  const [blogData,categoryData] = await Promise.all([
    client.get({ endpoint: 'blog', queries: { limit: 3 } }),
    client.get({ endpoint: "categories" }),
  ]);

  return {
    props: {
      blog: blogData.contents,
      category:categoryData.contents
    },
  };
};