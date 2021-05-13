import '@testing-library/jest-dom/extend-expect';

import { CopanProvider } from '@loft/copan-components';
import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import messages from '../../lang/pt';
import Index from '../../pages/index';
import { initStore } from '../../store';

describe('pages/index', () => {
  test('should render Index page correctly', async () => {
    const { asFragment } = render(
      <IntlProvider locale="pt" messages={messages as any}>
        <Provider store={initStore()}>
          <CopanProvider>
            <Index />
          </CopanProvider>
        </Provider>
      </IntlProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
