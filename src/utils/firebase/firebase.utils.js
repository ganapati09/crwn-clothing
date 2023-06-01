import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0_az7RSOMLZ1XS8AYnh_TXMG53PkErnU",
  authDomain: "crwn-db-38207.firebaseapp.com",
  projectId: "crwn-db-38207",
  storageBucket: "crwn-db-38207.appspot.com",
  messagingSenderId: "469726169568",
  appId: "1:469726169568:web:46ffc5d3310d5a2dd70385"
};


const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users',  userAuth.uid)
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
   console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('somethiing happenned', error);
    }
  }
  return userDocRef;
}