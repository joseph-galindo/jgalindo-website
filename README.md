# Personal Website

This repository has the source code for the Node.js web application hosted at https://josephgalindo.dev

This is an active work in progress. This README will be updated with further documentation in the future.

## Technical Outline

This project uses TypeScript + React + JSX to compose the UI source code.

When the project is built, two main JS bundles are created:
- a node.bundle.js (meant to be run by nodeJS)
- a web.bundle.js (meant to be run by the user's browser)

node.bundle.js will spawn a web server using Koa (an express-like webapp framework). The Koa server will generate and serve HTML down to the user's browser.

web.bundle.js, when run in the user's browser, will attempt to hydrate the React components that are server-side rendered beforehand by Koa.

The overall idea here is to not client-render the whole page, but to instead render the HTML on the web server, and then hydrate the app in the browser to give it any needed interactivity that can only be provided by JavaScript.

## Development

This project was developed in the following environment:
- pnpm@4.2.2
- node@10.12.0
- MacOS@10.14.6

Other environments have not yet been tested at this time.

Typically these versions (or newer) of pnpm and node should be sufficient.

To get started:
- clone the repository
- `git checkout master`
- `pnpm i`
- `pnpm start watch` (on the first run you will be prompted for Terminal admin permissions, this is just so that the watch scripts can automatically spawn in unique terminal tabs)
- app should now be served on http://localhost:3000