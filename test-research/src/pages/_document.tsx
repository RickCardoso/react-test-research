import { color } from '@loft/copan-tokens';
import { ServerStyleSheets } from '@material-ui/styles';
import { AppPropsType, AppType, DocumentInitialProps } from 'next/dist/next-server/lib/utils';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';
import { Heap, PreConnectHint } from '../components/Head';

// NODE_ENV is used for getting the current node env in build time
const buildEnv = process.env.NODE_ENV || 'development';

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: AppType) => (props: AppPropsType) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  }

  public render(): ReactElement {
    return (
      <Html lang="pt-BR" dir="ltr">
        <Head>
          <meta charSet="utf-8" />

          {/* PWA primary color */}
          <meta name="theme-color" content={color.brand.primary.main} />

          <link rel="icon" type="image/png" href="/images/favicon.png" sizes="32x32" />
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />

          {/* TODO: Add newrelic agent */}

          <PreConnectHint />
          {buildEnv === 'production' && <Heap />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
