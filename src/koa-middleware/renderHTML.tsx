import {Context} from 'koa';
import React from 'react';
import {renderToStaticNodeStream} from 'react-dom/server';
import streamTemplate from 'stream-template';

import {AppComponent} from '../components/app';

export function renderHTML() {
  return function middleware(ctx: Context) {
    const jsx = <AppComponent />;
    const renderStream = renderToStaticNodeStream(jsx);

    ctx.type = 'text/html';
    ctx.body = streamTemplate`<!DOCTYPE html>
    <html>
      <body>
        <main>${renderStream}</main>
      </body>
    </html>
    `;
  }
}