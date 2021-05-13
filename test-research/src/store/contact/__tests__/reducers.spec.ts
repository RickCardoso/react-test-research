import { Alert, contactSlice, IContact, initialState } from '../index';

describe('contactSlice reducers', () => {
  const { actions, reducer } = contactSlice;

  describe('data', () => {
    describe(`when receives ${actions.setContactData.type}`, () => {
      it('should set the data property as received from payload', () => {
        const payload: IContact['data'] = {
          name: 'John',
          lastName: 'Doe',
          email: 'john@email.com',
          message: 'my message',
        };
        const result = reducer(initialState, actions.setContactData(payload));
        const expectedState: IContact = {
          ...initialState,
          data: payload,
        };

        expect(result).toEqual(expectedState);
      });
    });
  });

  describe('ui', () => {
    describe(`when receives ${actions.setUiAlert.type}`, () => {
      it('should set the alert property as received from payload', () => {
        const payload: Alert = Alert.SUCCESS;
        const result = reducer(initialState, actions.setUiAlert(payload));
        const expectedState: IContact = {
          ...initialState,
          ui: {
            ...initialState.ui,
            alert: payload,
          },
        };

        expect(result).toEqual(expectedState);
      });
    });

    describe(`when receives ${actions.setUiSendingStatus.type}`, () => {
      it('should set the sending property as received from payload', () => {
        const payload = true;
        const result = reducer(initialState, actions.setUiSendingStatus(payload));
        const expectedState: IContact = {
          ...initialState,
          ui: {
            ...initialState.ui,
            sending: payload,
          },
        };

        expect(result).toEqual(expectedState);
      });
    });
  });
});
