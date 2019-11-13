import Koa from 'koa';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import streamTemplate from 'stream-template';

import {AppProps} from '../interfaces/appProps';
import {AppComponent} from '../components/app';

export function renderHTML(): Koa.Middleware {
  return function middleware(ctx: Koa.Context): void {
    // TODO: change this to read darkMode preference out of browser incoming request cookie
    const reactAppProps: AppProps = {
      darkMode: true,
    };
    const jsx = <AppComponent {...reactAppProps} />;
    const renderStream = renderToNodeStream(jsx);

    ctx.type = 'text/html';
    ctx.body = streamTemplate`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Joseph Galindo developer website</title>
    <meta name="description" content="placeholder">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="https://www.josephgalindo.dev">
    <link rel="preload" href="/static/web.bundle.js" as="script">
    <style>body{margin: 0}</style>
  </head>
  <body>
    <main id="app-root">${renderStream}</main>
    <script type="text/javascript">
      this.initialBrowserAppProps = ${JSON.stringify(reactAppProps)}
    </script>
    <script type="text/javascript" src="/static/web.bundle.js"></script>
  </body>
</html>
`;
  }
}