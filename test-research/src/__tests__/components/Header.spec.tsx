import '@testing-library/jest-dom/extend-expect';

import { CopanProvider } from '@loft/copan-components';
import { render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { PreloadedState } from 'redux';
import { Header } from '../../components/Header';
import messages from '../../lang/pt';
import { initStore } from '../../store';
import { getFullName } from '../../store/contact';

const setup = (mockState: PreloadedState<unknown> = undefined): RenderResult => {
  return render(
    <IntlProvider locale="pt" messages={messages as any}>
      <Provider store={initStore(mockState)}>
        <CopanProvider>
          <Header />
        </CopanProvider>
      </Provider>
    </IntlProvider>
  );
};

describe('Header component', () => {
  test('loads expected routing', () => {
    setup();
    expect(screen.queryAllByText(messages.app.home)[0]).toHaveAttribute('href', '/');
    expect(screen.queryAllByText(messages.app.contact)[0]).toHaveAttribute('href', '/contact');
    expect(screen.queryAllByText(messages.app.about)[0]).toHaveAttribute('href', '/about');
  });

  test('loads and shows user profile', () => {
    const mockData = {
      contact: {
        data: {
          name: 'Fulano',
          lastName: 'de Tal',
          email: 'fulano.de.tal@loft.com.br',
          message: 'Mensagem',
        },
      },
    };
    setup(mockData);
    const fullName = getFullName(mockData.contact.data);
    expect(screen.queryByText(fullName)).toBeInTheDocument();
  });
});
