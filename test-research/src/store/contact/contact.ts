import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert, IContact } from './types';

export const initialState: IContact = {
  data: {
    name: '',
    lastName: '',
    email: '',
    message: '',
  },
  ui: {
    alert: Alert.UNDEFINED,
  },
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactData: (state, { payload }: PayloadAction<IContact['data']>) => {
      state.data = payload;
    },
    setUiAlert: (state, { payload }: PayloadAction<Alert>) => {
      state.ui.alert = payload;
    },
    setUiSendingStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.sending = payload;
    },
  },
});

export const contactReducer = contactSlice.reducer;
