import AuthForm from "@/components/auth/AuthForm";
import React from "react";

const page = () => {
  return (
    <section className="flex py-20  items-center justify-center h-full w-full  max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default page;
