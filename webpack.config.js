const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = function ({target}) {
    const nodeTSConfig = {
      module: 'commonjs',
      target: 'ES2018',
      types: ['node'],
    };

    return {
      target,
      entry: path.join(__dirname, `src/${target}-entrypoint.tsx`),
      output: {
        path: path.join(__dirname, 'build'),
        filename: `${target}.bundle.js`,
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      externals: target === 'node' ? [webpackNodeExternals()] : [],
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
              compilerOptions: nodeTSConfig,
              onlyCompileBundledFiles: true,
            },
          },
        ]
      },
    }
};