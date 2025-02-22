import Head from "next/head";
import Header from '../../components/header';
import Link from 'next/link';
import styles from "../../styles/BlogList.module.css";
import $ from 'jquery'
import { useEffect, useState } from 'react';
import { client } from "../../libs/client";
import Script from 'next/script';
export default function Home({ blog }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    $('.blog_publish_time').each(function () {
      $(this).html($(this).html().slice(0, 10));
    })
    $('.publishedat').each(function () {
      let txt = String($(this).text().match(/([0-9]{4}-[0-9]{2}-[0-9]{2})/)).split(',')[0]
      $(this).text(txt)
    })
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blog.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="change_header_color">
      <Head>
        <title>記事一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="contents_wrap">
          <div className="main_content">
            <div className="content">
              <h1>記事一覧</h1>
              <ul className={styles.blog_ul}>
                {currentPosts.map((blog) => (
                  <li className={styles.blog_list} key={blog.id}>
                    <Link className={styles.link} href={`/blog/${blog.id}`}>
                      <div className={styles.img_wrapper}>
                        {blog.image && blog.image.url && (
                          <img className={styles.img} src={blog.image.url} alt={blog.title} />
                        )}
                      </div>

                      <div className={styles.wrap_info}>
                        <div className={styles.blog_title}>{blog.title}</div>
                        <div className={styles.day}>作成日：<span className="publishedat">{blog.createdAt}</span></div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                {currentPage > 1 && (
                  <button className={styles.prev} onClick={() => paginate(currentPage - 1)}>前へ</button>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={currentPage === pageNumber ? styles.active : styles.otherpage}
                  >
                    {pageNumber}
                  </button>
                ))}

                {currentPage < totalPages && (
                  <button className={styles.next} onClick={() => paginate(currentPage + 1)}>次へ</button>
                )}
              </div>
            )}


          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog', queries: { limit: 1000 }
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};