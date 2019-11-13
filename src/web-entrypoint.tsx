import React from 'react';
import ReactDOM from 'react-dom';

import { AppComponent } from './components/app';
import { AppProps } from './interfaces/appProps';

// First, read the server-side serialized initial props from the browser window
// This declare is "extending" the built-in Window typings
// See: https://stackoverflow.com/a/12709880
declare global {
  interface Window {
    initialBrowserAppProps: AppProps;
  }
}

const appProps = window.initialBrowserAppProps;

// Then, hydrate the server-rendered app in the user's browser
ReactDOM.hydrate(<AppComponent {...appProps} />, document.getElementById('app-root'));