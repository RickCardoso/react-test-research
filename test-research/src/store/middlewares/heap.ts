import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import { contactSlice } from '../contact';

const heapMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
  const { payload } = action;

  if (action.type === contactSlice.actions.setContactData.type) {
    console.log('heapMiddleware payload', payload);
    console.log('heapMiddleware global action', action);
  }
  return next(action);
};

export default heapMiddleware;
