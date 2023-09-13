import React from "react";
import LoginHeader from "../components/LoginHeader";
import SignUpForm from "../components/SignUpForm";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

export default function SignUp() {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <div>
        <LoginHeader />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
