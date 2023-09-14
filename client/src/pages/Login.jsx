import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm.jsx";
import AnimatedCursor from "react-animated-cursor";

export default function Login() {
  return (
    <div>
      <AnimatedCursor />
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
