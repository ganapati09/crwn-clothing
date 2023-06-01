import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    

  }
  return (
    <div>
          <h1>SignIn</h1>
        <button onClick={logGoogleUser}>
        sign in with google
        </button>
    </div>

  )
}

export default SignIn