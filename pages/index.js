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
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
      <div className={styles.contents_wrap}>
        <div className={styles.main_content}>
          <div className={styles.content}>
          <h1 className={styles.h1}>お知らせ</h1>
          <div className={styles.news_p}>
            <ul className={styles.ul}>
            {news.map((news) => (
                <li className={styles.news_li} key={news.id}>
                  <div className={styles.news_time}>{news.publishedAt}</div><div className={styles.news_title}>{news.news_title}</div>
                </li>
            ))}
            </ul>
          </div>
            <h1 className={styles.h1}>プロフィール</h1>
            <p className={styles.p}>
              はじめまして。Kumaといいます。<br/>
              プロフィールを見ていただき、ありがとうございます。<br/>
              自己紹介をさせていただきます。
            </p>
            <div className={styles.simplebox1}>
              <p>名前 : Kuma</p>
              <p>年齢 : 20代後半</p>
              <p>出身 : 宮崎</p>
              <p>職業 : Web開発エンジニア</p>
              <p>趣味 : スポーツ観戦・プログラミング・数学</p>
            </div>
            <h1 className={styles.h1}>スキル</h1>
            <div className={styles.simplebox1}>
              <p>
                【実務経験あり】<br />
                言語：HTML/CSS/Javascript(jQuery)<br />
              </p>
              <p>
                【自己学習等で成果物あり】<br />
                React.js×Next.js(このサイト)<br/>
                Vue.js×Typescript×AWS(<a href="https://kuma-spatest.com">https://kuma-spatest.com/</a>)
              </p>
            </div>
            <h1 className={styles.h1}>経歴</h1>
            <h3 className={styles.h3}><i className={styles.check}></i>大学時代</h3>
            <p className={styles.p}>
              高校時代はパソコンを所持しておらず学校で習ったExcel/Word/PowerPointくらいしかできませんでした。<br />
              大学の講義で初めてプログラミングをしました。言語はC#。<br />
              大学2年くらいのときにUnityが流行り始めたので、協力してゲーム作って遊んだりもしました。<br />
              大学の専攻は化学系でした。講義も段々難しくなり、研究にも時間を取られ<br />
              プログラミングの知識は化学のことであっという間に埋もれてしまいました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>就職</h3>
            <p className={styles.p}>
              就活で最終的に選んだ会社は、関東にあるプラント系の企業でした。<br />
              就職直後にコロナが流行りはじめたのでずっと寮内で過ごし<br />
              そこでプログラミングを再開したところかなりハマってしまい転職を決意しました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>職業訓練校</h3>
            <p className={styles.p}>
            仕事をやめ、コロナの様子を見ながら基礎から学び直したいなと思い約半年間IT系の訓練校に行きました。<br />
            そこで「君なかなかできるね！」と褒めて伸ばされ先生の紹介で無事就職しました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>再就職</h3>
            <p className={styles.p}>
              訓練校を卒業した時点ではHTML/CSS/Javascriptを軽く書ける程度でした。<br />
              1年目は簡単なJavascriptからでフロントエンドの実装<br />
              2年目はRPAに関心を持ち、データ入力の自動化<br />
              3年目からは成長が停滞しはじめたのでAWS等の勉強をしていました。
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>現在の目標</h3>
            <p className={styles.p}>
              現在の会社に入って4年目になりました。<br />
              1.給料を上げたい生活を豊かにしたい<br />
              2.人格面を磨きたい<br />
              3.もっと色んなことができるようになりたい<br />
              これが現在の目標です。<br />
            </p>
            <h1 className={styles.h1}>ブログについて</h1>
            <p className={styles.p}>
              せっかく作ったブログですが、学習用のためなので運用はしないです。<br />
              Qiita等のサービスがあるのでそちらで活動したいと思います<br />
              最後まで読んでいただき、ありがとうございました。
            </p>
          </div>
        </div>
        <div className={styles.side_content}>
        <div className={styles.content}>
            <h1 className={styles.h1}> 最近の投稿</h1>
            <ul className={styles.ul}>
              {blog.map((blog) => (
                <li className={styles.li} key={blog.id}>
                  <Link className={styles.link} href={`/blog/${blog.id}`}>
                  <div className={styles.blog_img} style={{backgroundImage: `url(${blog.image.url})`}}></div>
                  <div className={styles.blog_title}>{blog.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <a className={styles.motto} href="/blog/list">もっとみる</a>
          </div>
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

  const [blogData, newsData,categoryData] = await Promise.all([
    client.get({ endpoint: 'blog', queries: { limit: 3 } }),
    client.get({ endpoint: 'news'}),
    client.get({ endpoint: "categories" }),
  ]);

  return {
    props: {
      blog: blogData.contents,
      news: newsData.contents,
      category:categoryData.contents
    },
  };
};