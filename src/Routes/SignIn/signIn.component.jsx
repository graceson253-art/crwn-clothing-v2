import {
  SignInGooglePopup,
  CreateUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUSer = async () => {
    const { user } = await SignInGooglePopup();
    CreateUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      this is SignIn page
      <button onClick={logGoogleUSer}>Google sign in</button>
    </div>
  );
};

export default SignIn;
