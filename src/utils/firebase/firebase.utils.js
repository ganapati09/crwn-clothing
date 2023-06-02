import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

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
});


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log('i am called')
  return await createUserWithEmailAndPassword(auth, email, password);
};