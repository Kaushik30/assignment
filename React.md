Question - (1) - What is React?
Answer - (1) - React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach.

Question - (2) - Who made React?
Answer - (2) - React was created by Jordan Walke, a software engineer at Facebook. It was first released in 2013 and has since become one of the most popular JavaScript libraries in the world.

Question - (3) - What is Babel?
Answer - (3) - Babel is a JavaScript transpiler that converts ES6 code to ES5 code. ES6 is the latest version of JavaScript, but it is not supported by all browsers. Babel allows developers to use ES6 features in their code, even if the browsers their users are using do not support it.

Question - (4) - How does Babel convert html code in React into valid code?
Answer - (4) - Babel converts HTML code in React into valid code by using a process called JSX transformation. JSX transformation converts HTML code into JavaScript objects.

Question - (5) - What is ReactDOM used for? Write an example?
Answer - (5) - ReactDOM is used to render React components to the DOM.
Eg. - (5) - import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return <h1>Hello, world!</h1>;
};
ReactDOM.render(<App/>, document.getElementById('root'));


Question - (6) - What are the packages that you need to import for react to work with?
Answer - (6) - The two packages that you need to import for React to work with are "react" and "react-dom". You can install these packages using npm or yarn.

Question - (7) - How do you add react to a web application?
Answer - (7) - To add React to a web application, you need to create a new HTML file and add the following script tags to the head of the file: Then, you need to create a React component and render it to the DOM.
For React - <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>;
For React DOM - <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>;

Question - (8) - What is React.createElement?
Answer - (8) - React.createElement is a function that creates a new React element. A React element is a lightweight description of what you want to render.

Question - (9) - What are the three properties that createElement accept?
Answer - (9) - The three properties that createElement accept are:
type: The type of element to create. For example, div, h1, or p.
props: An object of properties to pass to the element. For example, className or onClick.
children: An array of child elements.

Question - (10) - What is the meaning of render and root?
Answer - (10) - Render is the process of converting a React element into HTML. Root is the DOM element where you want to render the React element.
