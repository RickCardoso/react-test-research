import { TextField as CopanTextField } from '@loft/copan-components';
import React, { FC } from 'react';

type Props = {
  field: any;
  props: any;
};

export const TextField: FC<Props> = ({ field, ...props }: Props) => {
  return <CopanTextField {...field} {...props} />;
};
