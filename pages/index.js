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
    <div>
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
            <ul>
            {news.map((news) => (
                <li className={styles.news_li} key={news.id}>
                  <div className={styles.news_time}>{news.publishedAt}</div><div className={styles.news_title}>{news.news_title}</div>
                </li>
            ))}
            </ul>
          </div>
            <h1 className={styles.h1}>プロフィール</h1>
            <p className={styles.p}>
              はじめまして。KUMです。<br/>
              プロフィールを見ていただき、ありがとうございます。<br/>
              自己紹介をさせていただきます。
            </p>
            <div className={styles.simplebox1}>
              <p>名前 : KUM</p>
              <p>年齢 : 20代後半</p>
              <p>出身 : 宮崎</p>
              <p>職業 : Web制作エンジニア</p>
              <p>趣味 : スポーツ観戦・プログラミング・数学</p>
            </div>
            <h1 className={styles.h1}>スキル</h1>
            <div className={styles.simplebox1}>
              <p>
                【実務経験あり】<br />
                言語：HTML/CSS/Javascript<br />
                ライブラリ：PlayWright/jQuery<br />
                フレームワーク：Jest<br />
              </p>
              <p>
                【自己学習等で成果物あり】<br />
                ライブラリ：React.js/Socket.IO<br/>
                フレームワーク：Express/Next.js
              </p>
            </div>
            <h1 className={styles.h1}>経歴</h1>
            <h3 className={styles.h3}><i className={styles.check}></i>高校から大学進学まで</h3>
            <p className={styles.p}>
              高校時代は普通科に通っていました。ごく普通の地味な学生でした。<br />
              高校3年生のときにはいろいろあって殆ど勉強できませんでしたが、自分の能力を信じて九州大学受験！<br />
              結果は失敗に終わりましたが、なんとか後期で地方の国立大学に合格したのでその大学へ行きました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>大学時代</h3>
            <p className={styles.p}>
              高校時代は家の制約でパソコンを触ることができなかったため、学校で習ったExcel/Word/PowerPointくらいしかできませんでした。<br />
              当時プログラミングできてたら滅茶苦茶ハマっていただろうなと思います。<br />
              大学入学後、遂に自分のパソコン手に入れました！<br />
              大学の講義で初めてプログラミングをしました。言語はC#。<br />
              大学2年くらいのときにUnityが流行り始めたので、2chの人達と協力してゲーム作って遊んだりもしました。<br />
              一方、大学の専攻はというと化学系でした。講義も段々難しくなり、研究にも時間を取られ<br />
              プログラミングの知識は化学のことであっという間に埋もれてしまいました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>就職</h3>
            <p className={styles.p}>
              就活で最終的に選んだ会社は、関東にあるプラント系の企業でした。<br />
              半強制的に寮での生活だったのですが、まさかまさかの60台のお爺さんとの共同生活！<br />
              しかもコロナが流行りはじめたのでずっと同じ部屋で過ごすことに・・・<br />
              同期の部屋にお邪魔してお酒飲んだりして楽しかったのですが、<br />
              出張続きで休みが無かったり田舎の生活が合わなかったりで半年で辞めてしまいました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>職業訓練校</h3>
            <p className={styles.p}>
            ニートになって初ハロワ。2chで「ニート共ハロワ行けｗｗｗ」とか言ってキャッキャしてたツケが回ってきましたね。<br />
            ハロワの案内に「職業訓練学校」の文字。ハロワの職員さんに質問してるうちに、
            プログラミングを基礎から学び直したいなと思い約半年間IT系の訓練校に行きました。<br />
            職業訓練校どんなところかというとお金貰いながら資格やスキルを身に付けられる神施設です。
            授業の内容は自己啓発的な事2割、IT系のことが6割、就活関連が2割って感じでした。<br />
            講師は元エンジニアで今は会社持って経営してて空いた時間に講義してますって人がたくさんでした。<br />
            社会人トップの人からプログラミング以外のこともたくさん聞けて、とても貴重な時間でした。<br />
            そこで「君なかなかできるね！」と褒めて伸ばされ先生の紹介で無事就職しました。<br />
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>再就職</h3>
            <p className={styles.p}>
              訓練校を卒業した時点ではHTML/CSS/Javascriptを軽く書ける程度でした。<br />
              1年目は簡単なJavascriptから。<br />
              2年目はNode.jsを使ってデータ入力を自動化したり、外部とAPIの連携をしたり<br />
              上司の名采配お陰で自分のレベル感にあった案件が回されて順調に成長することができました。
            </p>
            <h3 className={styles.h3}><i className={styles.check}></i>現在の夢</h3>
            <p className={styles.p}>
              今はエンジニア3年目ですが、まだまだ駆け出しです。<br />
              多くの経験を積んで一人前のエンジニアになることが第一の目標。<br />
              第二の目標は「金持ちになりたい」ってところですかね。<br />
              分析好きなので少額でFX自動化とか競馬予想AIとかやってみたいですね、<br />
              デモ環境作って試して本番、仕事と同じです。目指せ不労所得！笑<br />
            </p>
            <h1 className={styles.h1}>ブログについて</h1>
            <p className={styles.p}>
              このブログを作った理由は主にこの２つです。
            </p>
            <div className={styles.simplebox1}>
              <p>●Next.js、Reactの学習のため</p>
              <p>●自分の知識や経験を発信することで誰かの何かの役に立てればと思ったから</p>
              <p>●アウトプットを行うことで発信力をつけたいと思ったから</p>
            </div>
            <p className={styles.p}>
              現時点で書きたいことがいっぱいあるのですが働いた2年分のブログ書くのが追いつかない。。。<br />
              せっかく作ったブログなので、ぼちぼち運用してみようかなと思います。<br />
              現時点でブログとして最低限の機能しかないので今後いろいろ追加していきたいですね・・・！！<br />
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
                  <div className={styles.blog_img}></div>
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
                <li className="category_list" key={category.id}>
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