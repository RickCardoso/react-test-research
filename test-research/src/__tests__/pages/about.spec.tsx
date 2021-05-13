import '@testing-library/jest-dom/extend-expect';

import { CopanProvider } from '@loft/copan-components';
import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import messages from '../../lang/pt';
import About from '../../pages/about';
import { initStore } from '../../store';

describe('pages/about', () => {
  test('should render About page correctly', async () => {
    const { asFragment } = render(
      <IntlProvider locale="pt" messages={messages as any}>
        <Provider store={initStore()}>
          <CopanProvider>
            <About />
          </CopanProvider>
        </Provider>
      </IntlProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
