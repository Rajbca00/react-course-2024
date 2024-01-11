import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const ReactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const aReactElement = React.createElement('a', {
    href: "https://google.com",
    target: "_blank"
}, 'Click me to visit google')

const AnotherElement = <a href='https://google.com' target='_blank'>Click me to visit google</a>

function MyApp() {
    return (<App />)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    AnotherElement
);