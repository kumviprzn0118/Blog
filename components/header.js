import Link from 'next/link';
// import styles from "../styles/header/Header.module.scss";
const Header = () => {
  return (
    <>
  <header className="header">
    <div className="navtext-container">
      <div className="navtext">KUM_Blog</div>
    </div>
    <input type="checkbox" className="menu-btn" id="menu-btn"/>
    <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
    <ul className="menu">
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/blog/list">
          Blog
        </Link>
      </li>
      <li>
        <Link target="_blank" href="https://github.com/vipRznChan">
          Github
        </Link>
      </li>
    </ul>
  </header>
  <div className='space'></div>
    </>
  );
};

export default Header;