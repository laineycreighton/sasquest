import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm.jsx";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

export default function Login() {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
