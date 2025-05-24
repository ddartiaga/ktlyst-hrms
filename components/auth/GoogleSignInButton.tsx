"use client";

import { useActionState } from "react";
import { signInWithGoogle } from "./action";
import { DangerAlert } from "@/components/elements/Alerts";

const GoogleSignInButton = () => {

    const [state, formAction, pending] = useActionState(signInWithGoogle, { success: false, error: null });
    return (
        <form
            action={formAction}
        >
            <div className="d-grid">
                {state.error && (
                    <DangerAlert message={state.error} />
                )}
                <button type="submit" className="btn btn-danger label-btn">
                    {/* <i className="ri-google-line fw-bolder" />  */}
                    {pending ? "Signing in..." : "Sign In with Google"}
                </button>
            </div>
        </form>
    )
}

export default GoogleSignInButton;