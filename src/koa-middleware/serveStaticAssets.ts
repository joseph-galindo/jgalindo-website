import Koa from 'koa';
import serve from 'koa-static-server';
import path from 'path';

export function serveStaticAssets(): Koa.Middleware {
  // serve() returns a Koa middleware.
  // This middleware is what will serve static assets, like the JS web bundles, on the webserver
  // so that the browser can access and download them to the user's browser.
  return serve({
    rootDir: path.resolve(process.env.PWD, 'build/public'),
    rootPath: path.join('/', 'static'),
  });
}