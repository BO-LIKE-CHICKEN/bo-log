import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { containerStyle, headerStyle, logoStyle, logoTextStyle, navAnchorStyle, navStyle } from './styles.css';

function Header() {
  return (
    <header className={headerStyle}>
      <div className={containerStyle}>
        <Link className={logoStyle} href="/">
          <p className={logoTextStyle}>
            <strong>BO-LOG (열심히 공사 중 입니다)</strong>
          </p>
          <Image src="/logo.png" width={54} height={54} alt="logo, chicken" />
        </Link>
        <nav className={navStyle}>
          <Link className={navAnchorStyle} href="/posts">
            <b>Posts</b>
          </Link>
          <p>|</p>
          <Link className={navAnchorStyle} href="/">
            <b>{`It's a me BO!`}</b>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
