import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

let App = function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
