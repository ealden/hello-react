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
    <>
      <h2>Creating and Nesting Components</h2>
      <MyButton />
    </>
  );
}

function WritingMarkupWithJSX() {
  return (
    <>
      <h2>Writing Markup with JSX</h2>
      <p>This is an empty wrapper</p>
    </>
  );
}

function AddingStyles() {
  return (
    <>
      <h2>Adding Styles</h2>
      <img className="avatar" src="https://avatars.githubusercontent.com/u/7974?v=4" />
    </>
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
      <h2>Displaying Data</h2>
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
    <>
      <h2>Conditional Rendering</h2>
      <div>
        {content}
      </div>
    </>
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
    <>
      <h2>Rendering Lists</h2>
      <ul>{listItems}</ul>
    </>
  );
}

function RespondingToEvents() {
  function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }

    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

  return (
    <>
      <h2>Responding to Events</h2>
      <MyButton />
    </>
  );
}

function UpdatingTheScreen() {
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
      <h2>Updating the Screen</h2>
      <MyButton />
    </>
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
      <h2>Using Hooks</h2>
      <MyButton />
      <br />
      <MyButton />
    </>
  );
}

function SharingDataBetweenComponents() {
  function MyButton({count, onClick}) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Sharing Data Between Components</h2>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

let App = function MyApp() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <CreatingAndNestingComponents />
      <WritingMarkupWithJSX />
      <AddingStyles />
      <DisplayingData />
      <ConditionalRendering />
      <RenderingLists />
      <RespondingToEvents />
      <UpdatingTheScreen />
      <UsingHooks />
      <SharingDataBetweenComponents />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
