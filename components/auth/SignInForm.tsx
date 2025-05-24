import { signIn } from "@/auth";
import { MagicLinkForm } from "./MagicLinkForm";
import GoogleSignInButton from "./GoogleSignInButton";

const SignInForm = () => {
  return (
    <>
      <div>
        <GoogleSignInButton />
      </div>

      <div className="text-center my-3 authentication-barrier">
        <span>OR</span>
      </div>
      <div>
        <MagicLinkForm />
      </div>

      <div className="text-center">
        <p className="fs-12 text-muted mt-4">
          Dont have an account?{" "}
          <a href="sign-up-basic.html" className="text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default SignInForm;
