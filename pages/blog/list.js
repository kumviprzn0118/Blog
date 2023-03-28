import Head from "next/head";
import Header from '../../components/header';
import Link from 'next/link';
import { client } from "../../libs/client";
import Script from 'next/script'
export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                <span>({blog.publishedAt})</span>
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