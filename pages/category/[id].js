import Head from "next/head";
import Header from '../../components/header';
import Link from 'next/link';
import $ from 'jquery'
import { useEffect } from 'react';
import { client } from "../../libs/client";
import Script from 'next/script'
export default function Home({ blog,newblog }) {
  useEffect(() => {
    $('.blog_publish_time').each(function(){
      $(this).html($(this).html().slice(0, 10));
    })

   }, []);
  return (
    <div>
      <Head>
        <title>記事一覧</title>
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
              <li className="li" key={blog.id}>
                <Link className="a" href={`/blog/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
          </div>
        
  
        </div>
        <div className="side_content">
        <div className="content">
            <h1> 最近の投稿</h1>
            <ul>
              {newblog.map((blog) => (
                <li className="li" key={blog.id}>
                  <Link className="a" href={`/blog/${blog.id}`}>
                  {blog.image && blog.image.url && (
                  <img src={blog.image.url} alt={blog.title} />
                  )}
                  <div>{blog.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <a href="/blog/list">もっとみる</a>
        </div>
        <div className="content"></div>
        <div className="content"></div>
        </div>
      </div>
      </main>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[contains]${id}` } });
  const newdata = await client.get({ endpoint: 'blog', queries: { limit: 3 } })
  return {
    props: {
      blog: data.contents,
      newblog:newdata.contents
    },
  };
};