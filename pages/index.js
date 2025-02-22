import Head from "next/head";
import Header from '../components/header';
import Swiper1 from '../components/swiper-head';
import Swiper2 from '../components/swiper-blog';
import styles from "../styles/Home.module.css";
import { useEffect, useState  } from 'react';
import { client } from "../libs/client";
import Link from 'next/link';
// import { Swiper, SwiperSlide } from "swiper";
import { motion } from 'framer-motion';
// import AnimatePresence from 
export default function Home({ blog, category }) {
  const [color,setColor] = useState("bg-black");
  const setcolor = (classname) => setColor(classname);
  // useEffect((blog) => {
  //   console.log(blog)
  // }, []);
  return (
    <div className="page_top">
      <div className="all_wrap">
        <Head>
          <title>ホーム</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
        <div className={styles.color_change}>
          <div id="bg_black" onClick={()=>setcolor("bg-black")} className={styles.bg_black}>&nbsp;</div>
          <div id="bg_444257" onClick={()=>setcolor("bg-444257")} className={styles.bg_444257}>&nbsp;</div>
        </div>
          <div className="contents_wrap">
            <div className="main_content">
              <h1>自己紹介</h1>
              <section className="content flex">
                <div className="flex-text">
                <h4>基本情報</h4>
                  <div className="simplebox1">
                    <div className={styles.profile_flex}>
                      <div>

                        <p>名前 : Kuma</p>
                        <p>職業 : フロントエンドエンジニア 4年目</p>
                        <p>趣味 : プログラミング・アニメ・猫</p>
                      </div>
                      <div className={styles.img_wrapper}><img className={styles.circle} src="/chacha.jpg"></img></div>
                    </div>
                  </div>
                  <h4>資格</h4>
                  <div className="simplebox1">
                    <p>2025年3月 : 基本情報技術者試験 受験予定</p>
                    <p>2025年4月 : AWS Certified Cloud Practitioner 受験予定</p>
                    <p>2025年6月 : AWS Certified Solutions Architect - Associate 受験予定</p>
                  </div>
                </div>
                <div className="blog_wrapper">
                  <Swiper1 image={["/jikogakusyu.png", "/jikogakusyu.png", "/jikogakusyu.png"]}></Swiper1>
                </div>
              </section>
            </div>
          </div>
          <div className={`contents_wrap ${color}`}>
            <div className="main_content">
              <h1 className="h1">技術ブログ</h1>
              <section className="content flex reverse">
                <div className="flex-text">
                  <ul>
                    <li>インフラ</li>
                    <li>フロントエンド</li>
                    <li>バックエンド</li>
                  </ul>
                  <p>趣味でやってる学習についてのブログです。</p>
                </div>
                <div className="blog_wrapper">
                  <Swiper2 data={blog}></Swiper2>
                </div>
              </section>
              <div className="center"><a className="btn-border" href="/blog/list">もっと見る</a></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export const getStaticProps = async (context) => {

  const [blogData, categoryData] = await Promise.all([
    client.get({ endpoint: 'blog', queries: { limit: 8 } }),
    client.get({ endpoint: "categories" }),
  ]);

  return {
    props: {
      blog: blogData.contents,
      category: categoryData.contents
    },
  };
};