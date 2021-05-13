import { Dispatch } from 'redux';
import { contactSlice, IContact, submitContactData } from '../index';
import { Alert } from '../types';

describe('sendContat', () => {
  const {
    actions: { setUiAlert, setUiSendingStatus, setContactData },
  } = contactSlice;
  const payload: IContact['data'] = {
    name: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    message: 'my message',
  };

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.51);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should dispatch actions to alert application that data is being sent', async () => {
    const mockDispatch = jest.fn() as Dispatch;
    await submitContactData(payload)(mockDispatch);

    expect(mockDispatch).toHaveBeenNthCalledWith(1, setUiAlert(Alert.UNDEFINED));
    expect(mockDispatch).toHaveBeenNthCalledWith(2, setUiSendingStatus(true));
  });

  it('should dispatch actions to alert application the sent process was successful', async () => {
    const mockDispatch = jest.fn() as Dispatch;
    await submitContactData(payload)(mockDispatch);

    expect(mockDispatch).toHaveBeenNthCalledWith(3, setUiSendingStatus(false));
    expect(mockDispatch).toHaveBeenNthCalledWith(4, setUiAlert(Alert.SUCCESS));
  });

  it('should dispatch action with the sent data', async () => {
    const mockDispatch = jest.fn() as Dispatch;
    await submitContactData(payload)(mockDispatch);

    expect(mockDispatch).toHaveBeenNthCalledWith(5, setContactData(payload));
  });
});
