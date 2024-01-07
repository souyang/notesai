import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import constants from "@/lib/constants";
export const metadata: Metadata = {
  title: "NotesAI - Sign In",
  alternates: {
    canonical: `${constants.BASE_URL}/sign-in`,
  }
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
