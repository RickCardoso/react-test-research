export type IContact = {
  aNumber?: number;
  data: {
    name: string;
    lastName: string;
    email: string;
    message: string;
  };
  ui?: {
    sending?: boolean;
    alert?: Alert;
  };
};

export enum Alert {
  SUCCESS,
  ERROR,
  UNDEFINED,
}
