import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter,
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];

function domElementGetter() {
    // This is where single-spa will mount our application  
    let el = document.getElementById('app1');
    if (!el) {
        el = document.createElement('div');
        el.setAttribute('id', 'app1');
        document.body.insertBefore(el, document.body.childNodes[0]);
    }

    return el;
}