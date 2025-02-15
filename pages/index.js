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
  useEffect((blog) => {
    $('[class*="Home_news_time"]').each(function(){
      $(this).html($(this).html().slice(0, 10));
  })
  console.log(blog)
   }, []);
  return (
    <>
    <div className="all_wrap">
      <Head>
        <title>ホーム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
  
          <Swiper1 image={["/jikogakusyu.png","/jikogakusyu.png","/jikogakusyu.png"]}></Swiper1>

      <div className="contents_wrap">
        <div className="main_content">
          <section className="content">
            <h1>自己紹介</h1>
            <div className="simplebox1">
              <p>名前 : Kuma</p>
              <p>職業 : Web開発エンジニア 4年目</p>
              <p>趣味 : プログラミング・アニメ・猫</p>
            </div>
          </section>
          <section className="content">
            <h1>スキルセット</h1>
            <div className="simplebox1">
              <p>Graph.jsでなんかやる</p>
            </div>
          </section>
          <section className="content">
            <h1>資格</h1>
            <div className="simplebox1">
              <p>2025年3月 : 基本情報技術者試験　合格</p>
            </div>
          </section>
          <section className="content">
          <h1 className="h1">技術ブログ</h1>
          <div className="blog_wrapper">
            <Swiper2 data={blog}></Swiper2>
          </div>
          <div className="right"><a href="/blog/list">もっと見る</a></div>
          </section>

        </div>
        <div className="side_content">
          <div className="content">
            <h1 className="h1">カテゴリ</h1>
            <ul className="category_ul">
              {category.map((category) => (
                <li className="category_list li" key={category.id}>
                  <Link href={`/category/${category.id}`}>{category.name2}</Link>
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
    client.get({ endpoint: 'blog', queries: { limit: 5 } }),
    client.get({ endpoint: "categories" }),
  ]);

  return {
    props: {
      blog: blogData.contents,
      category:categoryData.contents
    },
  };
};