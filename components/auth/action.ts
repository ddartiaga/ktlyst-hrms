"use server";

import { signIn } from "@/auth";

const signInWithGoogle = async (prevState: { success: boolean; error: null | string; }) => {
    console.log("signInWithGoogle", prevState);
    try {
        await signIn("google");
        return { success: true, error: null };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to sign in with Google." };
    }
}

const signInWithEmail = async (prevState: { success: boolean; error: null | string; }, formData: FormData): Promise<{ success: boolean; error: null | string; }> => {
    const email = formData.get("email") as string;
    const encodedEmail = encodeURIComponent(email);

    console.log("signInWithEmail", prevState);

    try {

        if (!email) {
            return { success: false, error: "Email is required" };
        }

        await signIn("resend", {
            email
        });
        return { success: true, error: null };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to send login link." };
    }
}

export { signInWithGoogle, signInWithEmail };