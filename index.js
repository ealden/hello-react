import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function CreatingAndNestingComponents() {
  return (
    <MyButton />
  )
}

let App = function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Creating and Nesting Components</h2>
      <CreatingAndNestingComponents />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
