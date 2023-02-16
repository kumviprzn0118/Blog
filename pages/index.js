import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from '../libs/client';
import Link from 'next/link'

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
        
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