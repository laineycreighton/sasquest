import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

// Pass users array to the List component as a prop
export default function Login() {
  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <LoginHeader />
        <LoginForm />
      </div>
    </AnimatedCursor>
  );
}
