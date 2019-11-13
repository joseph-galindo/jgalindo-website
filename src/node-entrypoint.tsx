import Koa from 'koa';

import { renderHTML } from './koa-middleware/renderHTML';
import { serveStaticAssets } from './koa-middleware/serveStaticAssets';

// Start the server
const port = 3000;
const appServer = new Koa();

// Register middleware for the server
appServer.use(serveStaticAssets());
appServer.use(renderHTML());

// Listen to the server on default port
appServer.listen(port);
console.log(`App is listening on port: ${port}`);
