import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
import {onAuthStateChanged} from'firebase/auth';
import Login from '../components/Login';
import Header from '../components/Header';

function AuthStateListener() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <Header/>
      ) : (
         <Login/>
      )}
    </div>
  );
}

export default AuthStateListener;
