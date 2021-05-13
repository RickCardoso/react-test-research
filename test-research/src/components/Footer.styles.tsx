import { color, spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core';

export default makeStyles({
  footer: {
    borderTop: `1px solid ${color.brand.secondary.light}`,
    marginTop: spacing['04'],
    padding: spacing.base,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
