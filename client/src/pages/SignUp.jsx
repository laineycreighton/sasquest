import React from "react";
import LoginHeader from "../components/LoginHeader";
import SignUpForm from "../components/SignUpForm";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

export default function SignUp() {
  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <div>
          <LoginHeader />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </AnimatedCursor>
  );
}
