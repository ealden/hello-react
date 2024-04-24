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

function WritingMarkupWithJSX() {
  return (
    <>
      <p>This is an empty wrapper</p>
    </>
  )
}

let App = function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Creating and Nesting Components</h2>
      <CreatingAndNestingComponents />
      <h2>Writing Markup with JSX</h2>
      <WritingMarkupWithJSX />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
