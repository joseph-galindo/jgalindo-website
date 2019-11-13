const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = function ({target}) {
    const webTSConfig = {
      module: 'ESNEXT',
      target: 'ES2015',
    };
    const nodeTSConfig = {
      module: 'commonjs',
      target: 'ES2018',
      types: ['node'],
    };

    return {
      target,
      entry: path.join(__dirname, `src/${target}-entrypoint.tsx`),
      output: {
        path: path.join(__dirname, 'build', target === 'web' ? 'public' : ''),
        filename: `${target}.bundle.js`,
        publicPath: path.join('/', 'static/'),
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
              compilerOptions: target === 'web' ? webTSConfig : nodeTSConfig,
              onlyCompileBundledFiles: true,
            },
          },
        ]
      },
    }
};