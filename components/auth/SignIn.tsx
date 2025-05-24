import SignInForm from "./SignInForm";
import Link from "next/link";

import { auth } from "@/auth";
import Version from "@/components/Version";

const SignIn = async () => {
  const session = await auth();
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12">
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Sign In to KATALYST</div>
              <Link href="/">
                <i className="ri-arrow-go-back-line fw-bolder" />
              </Link>
            </div>
            <div className="card-body p-5">
              {session ? (
                <>
                  <div className="text-center d-grid">
                    <h1 className="display-6">You are already signed in.</h1>
                    <Link
                      type="button"
                      href="/"
                      className="btn btn-primary btn-wave mt-3"
                    >
                      Go Back to Home Page
                    </Link>
                  </div>
                </>
              ) : (
                <SignInForm />
              )}
            </div>
            <div className="card-footer">
              <div className="text-center">
                <span className="text-muted">
                  Copyright ©{" "}
                  <span id="year"> {new Date().getFullYear()} </span>{" "}
                  <a
                    href="https://katalysttechservices.com"
                    className="text-primary fw-semibold"
                  >
                    Katalyst I.T. Services
                  </a>
                  . All rights reserved
                </span>
                <span> | </span>
                <span className="text-muted">
                  <span className="text-dark fw-semibold ">Version: </span>{" "}
                  <Version />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
