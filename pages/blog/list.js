import Head from "next/head";
import Header from '../../components/header';
import Link from 'next/link';
import styles from "../../styles/BlogList.module.css";
import $ from 'jquery'
import { useEffect } from 'react';
import { client } from "../../libs/client";
import Script from 'next/script'
export default function Home({ blog }) {
  useEffect(() => {
    $('.blog_publish_time').each(function(){
      $(this).html($(this).html().slice(0, 10));
  })
   }, []);
  return (
    <div>
      <Head>
        <title> - 記事一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
      <div className="contents_wrap">
        <div className="main_content">
          <div className="content">
          <h2>記事一覧</h2>
          <ul>
            {blog.map((blog) => (
              <li className={styles.blog_list} key={blog.id}>
                  <Link className={styles.link} href={`/blog/${blog.id}`}>
                  {blog.image && blog.image.url && (
                  <img className={styles.img} src={blog.image.url} alt={blog.title} />
                  )}
                  <div className="wrap_info">
                  <div className={styles.blog_title}>{blog.title}</div>
                  <div className={styles.day}>更新日：{blog.title}</div>
                  <div dangerouslySetInnerHTML={{ __html: blog.detail }} />
                  </div>
                  </Link>
              </li>
            ))}
          </ul>
          </div>
        
  
        </div>
        <div className="side_content">
        <div className="content"></div>
        <div className="content"></div>
        <div className="content"></div>
        </div>
      </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};