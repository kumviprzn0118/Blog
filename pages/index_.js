import Head from "next/head";
import Header from '../components/header';
import styles from "../styles/Home.module.css";
import $ from 'jquery'
import { useEffect } from 'react';
import { client } from "../libs/client";
import Link from 'next/link';
export default function Home({ blog,news,category }) {
  useEffect(() => {
    $('[class*="Home_news_time"]').each(function(){
      $(this).html($(this).html().slice(0, 10));
  })
   }, []);
  return (
    <div className={styles.all_wrap}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
      <div className={styles.contents_wrap}>
        <div className={styles.main_content}>
          <div className={styles.content}>
          </div>
        </div>
        <div className={styles.side_content}>
        <section className={styles.content}>
            <h1 className={styles.h1}> プロフィール</h1>
            <ul className={styles.ul}>
              {blog.map((blog) => (
                <>
                <li className={styles.li} key={blog.id}>
                  <Link className={styles.link} href={`/blog/${blog.id}`}>
                  <div className={styles.blog_img} style={{backgroundImage: `url(${blog.image.url})`}}></div>
                  <div className={styles.blog_title}>{blog.title}</div>
                  </Link>
                </li>
                </>
              ))}
            </ul>
            <a className={styles.motto} href="/blog/list">もっとみる</a>
        </section>
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