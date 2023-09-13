import React from "react";
import { useRouteError } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div id="error-page">
        <h8>You're Lost!</h8>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </AnimatedCursor>
  );
}
