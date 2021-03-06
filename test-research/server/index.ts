/* eslint-disable no-undef */
require('newrelic');
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import IntlPolyfill from 'intl';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const isDev = process.env.NODE_ENV !== 'production';

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const app = next({
  dev: isDev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser());
  server.use(bodyParser.json());

  server.get('/health_check', (_, res) => res.send('OK'));

  server.get('/metrics', (_, res) => res.status(404).end());

  server.get(['/_next/*', '/public/*'], (req, res) => handle(req, res));

  server.get('/contato', (req, res) => app.render(req, res, '/contact'));

  server.get(['/list', '/lista'], (req, res) => app.render(req, res, '/homes/list'));

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
    console.log(
      `> Server listening at http://localhost:${port} as ${
        isDev ? 'development' : process.env.NODE_ENV
      }`,
    );
  });
});
