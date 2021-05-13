import { spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core';
import { ListUnitsProps } from './ListUnits.component';

export default makeStyles({
  root: (props: ListUnitsProps) => ({
    marginTop: spacing.base,
    marginBottom: spacing.base,
    padding: props.x ? 1 : 2,
  }),
});
