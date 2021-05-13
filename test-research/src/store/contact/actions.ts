import { Dispatch } from 'redux';
import { contactSlice } from './contact';
import { Alert, IContact } from './types';

const {
  actions: { setUiAlert, setUiSendingStatus, setContactData },
} = contactSlice;

const simulateRequestTime = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

export const submitContactData = (payload: IContact['data']) => async (dispatch: Dispatch<any>) => {
  dispatch(setUiAlert(Alert.UNDEFINED));
  dispatch(setUiSendingStatus(true));

  await simulateRequestTime(2000).then(() => {
    const alert = Math.random() >= 0.5 ? Alert.SUCCESS : Alert.ERROR;

    dispatch(setUiSendingStatus(false));
    dispatch(setUiAlert(alert));
  });

  return dispatch(setContactData(payload));
};
