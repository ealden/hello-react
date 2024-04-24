import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function CreatingAndNestingComponents() {
  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

  return (
    <MyButton />
  );
}

function WritingMarkupWithJSX() {
  return (
    <>
      <p>This is an empty wrapper</p>
    </>
  );
}

function AddingStyles() {
  return (
    <img className="avatar" src="https://avatars.githubusercontent.com/u/7974?v=4" />
  );
}

function DisplayingData() {
  const user = {
    name: 'Ealden Escañan',
    imageUrl: 'https://avatars.githubusercontent.com/u/7974?v=4',
    imageSize: 90
  };

  return (
    <>
      <h3>{user.name}</h3>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function ConditionalRendering() {
  function AdminPanel() {
    return (
      <p>Admin Panel goes here</p>
    );
  }

  function LoginForm() {
    return (
      <p>Login Form goes here</p>
    );
  }

  let isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = <AdminPanel />
  } else {
    content = <LoginPanel />
  }

  return (
    <div>
      {content}
    </div>
  );
}

function RenderingLists() {
  const products = [
    { id: 1, title: 'Cabbage' },
    { id: 2, title: 'Garlic' },
    { id: 3, title: 'Apple' }
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function RespondingToEvents() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function UpdatingTheScreen() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function UsingHooks() {
  function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }

  return (
    <>
      <MyButton />
      <br />
      <MyButton />
    </>
  );
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
      <h2>Displaying Data</h2>
      <DisplayingData />
      <h2>Conditional Rendering</h2>
      <ConditionalRendering />
      <h2>Rendering Lists</h2>
      <RenderingLists />
      <h2>Responding to Events</h2>
      <RespondingToEvents />
      <h2>Updating the Screen</h2>
      <UpdatingTheScreen />
      <h2>Using Hooks</h2>
      <UsingHooks />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
