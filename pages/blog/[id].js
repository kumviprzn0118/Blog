import Head from "next/head";
import { client } from "../../libs/client";
import Header from '../../components/header';
import Link from 'next/link';
import styles from "../../styles/Blog.module.css";
import { useEffect } from 'react';
import $ from 'jquery'
export default function BlogId({ blog,category }) {
  useEffect(() => {
    console.log(category)
    console.log(blog.category)
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

        <h4 className="title" dangerouslySetInnerHTML={{ __html: blog.title }}></h4>

        <div className="content">
        <div className="category_area">
          <ul className={styles.category_ul}>
            {blog.category.map((category) => (
              <li className={styles.category_list} key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      <div className="side_content">
      <div className="content">
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
  const blogData = await client.get({ endpoint: "blog", contentId: id });
  const categoryData = await client.get({ endpoint: "categories"});
  return {
    props: {
      blog: blogData,
      category: categoryData.contents,
    },
  };
};
