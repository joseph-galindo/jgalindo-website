import Koa from 'koa';

import {renderHTML} from './koa-middleware/renderHTML';

// Start the server
const port = 3000;
const appServer = new Koa();

// Register middleware for the server
appServer.use(renderHTML());

// Listen to the server on default port
appServer.listen(port);
console.log(`App is listening on port: ${port}`);
