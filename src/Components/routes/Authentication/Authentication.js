import SignUp from '../../../Components/SignUp/SignUp';
import SignIn from '../../../Components/SignIn/SignIn';

import './Authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;