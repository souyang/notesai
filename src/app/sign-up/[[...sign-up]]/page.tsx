import { SignUp } from "@clerk/nextjs";
import constants from "@/lib/constants"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotesAI - Sign Up",
  alternates: {
    canonical: `${constants.BASE_URL}/sign-up`,
  }
};

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
