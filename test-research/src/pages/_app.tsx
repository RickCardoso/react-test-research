import { CopanProvider } from '@loft/copan-components';
import App, { AppContext, AppInitialProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import React, { ReactElement } from 'react';
import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import { Store } from 'redux';
import messages from '../lang/pt';
import { wrapper } from '../store';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface MyAppProps extends AppInitialProps {
  store: Store;
}

const cache = createIntlCache();

class MyApp extends App<MyAppProps> {
  public static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    const intlMessages: Record<string, any> = messages;

    const intl = createIntl(
      {
        locale: 'pt', // TODO prepare locale to server and client
        defaultLocale: 'pt',
        messages: intlMessages,
      },
      cache
    );

    return (
      <IntlProvider defaultLocale={intl.locale} locale={intl.locale} messages={intl.messages}>
        <CopanProvider>
          <Head>
            {/* Use minimum-scale=1 to enable GPU rasterization */}
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
          </Head>
          <Component {...pageProps} />
        </CopanProvider>
      </IntlProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
