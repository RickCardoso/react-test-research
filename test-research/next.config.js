/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const withTranspileModules = require('next-transpile-modules');

const environment = process.env.RUNTIME_ENV || 'development';
const path = require('path');

const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  distDir: '.next',
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.output.publicPath = `/${config.output.publicPath}`; // affects 'chunks'

    config.devtool = 'source-map';

    // Enables installing local libs that also depend on react and/or material-ui
    // https://www.npmjs.com/package/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react
    config.resolve.alias.react = path.resolve(__dirname, '.', 'node_modules', 'react');
    config.resolve.alias['@material-ui'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      '@material-ui'
    );

    return config;
  },
};

module.exports = withPlugins(
  [
    [withCSS],
    [withBundleAnalyzer],
    [
      withOptimizedImages({
        optimizeImagesInDev: true,
        inlineImageLimit: -1,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.7, 0.9],
          speed: 4,
        },
      }),
    ],
    [
      // https://github.com/vercel/next.js/pull/11849
      // Not used but included in the issue above
      // 'intl-format-cache',
      // 'intl-messageformat-parser',
      // 'intl-messageformat',
      // '@formatjs/intl-utils',
      withTranspileModules(['@formatjs/intl-relativetimeformat', 'react-intl']),
    ],
  ],
  nextConfig
)(environment, nextConfig);
