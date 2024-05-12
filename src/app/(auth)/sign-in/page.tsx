import AuthForm from "@/components/auth/AuthForm";
import React from "react";

const page = () => {
  return (
    <section className="flex-center h-dvh max-h-dvh overflow-y-auto w-full container size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default page;
