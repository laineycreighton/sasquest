import React from "react";
import LoginHeader from "../components/LoginHeader";
import SignUpForm from "../components/SignUpForm";
import AnimatedCursor from "react-animated-cursor";

export default function SignUp() {
  return (
    <div>
      <AnimatedCursor />
      <LoginHeader />
      <SignUpForm />
    </div>
  );
}
