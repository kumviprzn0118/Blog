import Head from "next/head";
import { client } from "../../libs/client";
import Header from '../../components/header';
import { useEffect } from 'react';
import $ from 'jquery'
export default function BlogId({ blog }) {
  useEffect(() => {
    // $('.kiji').each(function(){
    //   $(this).html($(this).text())
    // });
    $('.kiji').each(function(){
      $(this).html($(this).html().replace(/\n/g,"<br>"))
  })
   }, []);
  return (
    <>
    <Head>
    <title>{blog.title}</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main>
    <div className="contents_wrap">
      <div className="main_content">
        <div className="content">
          <div className="section">
            <h1>{blog.cotent_title1}</h1>
            <div className="kiji">
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
          </div>
          <div className="section">
            <h1>{blog.cotent_title2}</h1>
            <div className="kiji">
            <div dangerouslySetInnerHTML={{ __html: blog.content2 }}></div>
            </div>
          </div>
          <div className="section">
            <h1>{blog.cotent_title3}</h1>
            <div className="kiji">
            <div dangerouslySetInnerHTML={{ __html: blog.content3 }}></div>
            </div>
          </div>
          <div className="section">
            <h1>{blog.cotent_title4}</h1>
            <div className="kiji">
            <div dangerouslySetInnerHTML={{ __html: blog.content4 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_content">
      <div className="content">

        <a href="/blog/list">もっとみる</a>
      </div>
      <div className="content">
        
      </div>
      <div className="content"></div>
      </div>
    </div>
    </main>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};