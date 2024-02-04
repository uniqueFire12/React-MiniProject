import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// function MyApp() {
//     return (
//         <div>
//             <a href="http://www.google.com">Click me to visit google</a>
//         </div>
//     )
// }

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// };

const anotherElement = (
    <a href="http://www.google.com">visit google</a>
);

const anotherUser = "Ananya";

const reactElement = React.createElement(
    'a', 
    {href: "https://google.com", target: "_blank"},
    "click me to visit google",
    anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).
render(
   <App />
);
