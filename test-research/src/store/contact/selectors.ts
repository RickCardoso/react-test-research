import { IContact } from './types';

export const getFullName = (data: IContact['data']): string | undefined => {
  return `${data.name} ${data.lastName}`;
};
