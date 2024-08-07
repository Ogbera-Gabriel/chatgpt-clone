import './signInPage.css';
import { SignIn } from "@clerk/clerk-react"

const SignInPage = () => {
  return (
    <div className="sign-in">
      <SignIn path="/sign-in" /> 
    </div>
  );
};

export default SignInPage;
