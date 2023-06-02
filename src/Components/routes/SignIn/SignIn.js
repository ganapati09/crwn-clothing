import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import SignUp from '../../SignUp/SignUp';

import { auth, signInWithGooglePopup, signInWithGoogleRedirect,  createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

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
      <SignUp />
    </div>

  )
}

export default SignIn