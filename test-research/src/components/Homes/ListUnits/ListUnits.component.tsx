import { Typography } from '@loft/copan-components';
import React, { FC, ReactElement } from 'react';
import useStyles from './ListUnits.styles';

export type ListUnitsProps = {
  x: boolean;
};

export const ListUnits: FC<ListUnitsProps> = (props: ListUnitsProps): ReactElement => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography component="h4" variant="h4">
        List Units
      </Typography>
    </div>
  );
};

export default ListUnits;
