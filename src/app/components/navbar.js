"use client";

import Link from 'next/link';
import Styles from './common.css'; // Ensure this file exists and contains the correct CSS
import Image from 'next/image';
import UserData from './userData.js';
import Styless from '../page.module.css'; // Ensure this file exists and contains the correct CSS
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav className={Styles.nav}>
      <button id='menuSpan' onClick={toggleMenu}>
        <img src='/menu.png' alt='Menu' />
      </button>
      <span>
        <Image className={Styles.logoProfile} src='/g6-3.png' width={30} height={40} alt="Logo" />
        <h3 className={Styless.gradienttext}>Sustained Paths</h3>
      </span>
      <div 
        className={Styless.menubar}
        style={{ right: isMenuOpen ? '0' : '-250px' }} // Adjust the value as needed
      >
        {!user ? (
          <div className={Styless.sorrynodisplay}></div>
        ) : (
          <div className={Styless.profileforMobile}>
            <img className={Styless.niceProfile} src={user.picture} alt={user.name} />
            <div className={Styless.dataFlex}>
              <p className={Styless.names}>{user.name}</p>
              <p className={Styless.emails}>{user.email}</p>
            </div>
          </div>
        )}
        <div className={Styless.forMobile}>
          <div className={Styless.greenDot}></div>
          <Link href="/">Home</Link>
          <img src='/right-chevron.png' alt='Arrow Icon' />
        </div>
        <div className={Styless.forMobile}>
          <div className={Styless.greenDot}></div>
          <Link href="/about">About</Link>
          <img src='/right-chevron.png' alt='Arrow Icon' />
        </div>
        <div className={Styless.forMobile}>
          <div className={Styless.greenDot}></div>
          <Link href="/refference">Reference</Link>
          <img src='/right-chevron.png' alt='Arrow Icon' />
        </div>
        <div className={Styless.forMobile}>
          <div className={Styless.greenDot}></div>
          <Link href="/#blogs">Blogs</Link>
          <img src='/right-chevron.png' alt='Arrow Icon' />
        </div>
        <div className={Styless.forMobile}>
          <div className={Styless.greenDot}></div>
          <Link href="/about/#team">Our Team</Link>
          <img src='/right-chevron.png' alt='Arrow Icon' />
        </div>
        <a className={Styless.forMobileLogout} href="/api/auth/logout">Logout</a>
      </div>
      <UserData />
    </nav>
  );
};

export default Navbar;
