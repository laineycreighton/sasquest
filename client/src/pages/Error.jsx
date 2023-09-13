import React from "react";
import { useRouteError } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <div id="error-page">
        <h8>You're Lost!</h8>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
