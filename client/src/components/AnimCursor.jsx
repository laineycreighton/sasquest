import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 20, 20'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}