import Head from "next/head";
import { client } from "../../libs/client";
import Header from '../../components/header';
import Prism from 'prismjs';
import 'prismjs/themes/prism-dark.css';
import 'prismjs/components/prism-javascript';
import { useEffect } from 'react';
export default function BlogId({ blog, category }) {
  useEffect(() => {
    // Prism.jsを実行
    Prism.highlightAll()
  }, []);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="blog">
        <div className="contents_wrap">
          <div className="main_content">

            <h1 className="title" dangerouslySetInnerHTML={{ __html: blog.title }}></h1>

            <div className="content">
              <div className="category_area">
                <ul className="category_ul">
                  {blog.category.map((category) => (
                    <li className="category_list" key={category.id}>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog_area" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
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
  const categoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: blogData,
      category: categoryData.contents,
    },
  };
};
