'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import Styles from '../page.module.css';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;


  return (
    <div className={Styles.userDataalign}>
      {!user ? (
        <a href='/api/auth/login'>Login</a>
      ) : (
        <div>
          <img
            className={Styles.miniProfile}
            src={user.picture}
            alt={user.name}
          />
            <div className={Styles.hiddencard}>
              <img className={Styles.niceProfile} src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <a href="/api/auth/logout">Logout</a>
            </div>
        </div>
      )}
    </div>
  );
}
