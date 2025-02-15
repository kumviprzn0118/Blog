import Link from 'next/link';
// import styles from "../styles/header/Header.module.scss";
const Header = () => {
  return (
    <>
  <header className="header">
    <div className="navtext-container">
      <div className="navtext"></div>
    </div>
    <input type="checkbox" className="menu-btn" id="menu-btn"/>
    <label htmlFor="menu-btn" className="menu-icon"><span className="navicon"></span></label>
    <ul className="menu">
      <li className="li">
        <Link href="/">
          Home
        </Link>
      </li>
      <li className="li">
        <Link href="/blog/list">
          Blog
        </Link>
      </li>
      <li className="li">
        <Link target="_blank" href="https://github.com/kumviprzn0118">
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