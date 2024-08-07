import './signUpPage.css';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignUpPage;
