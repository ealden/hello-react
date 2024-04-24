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

function AddingStyles() {
  return (
    <img className="avatar" src="https://avatars.githubusercontent.com/u/7974?v=4" />
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
      <h2>Adding Styles</h2>
      <AddingStyles />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
