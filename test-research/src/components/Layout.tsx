import { Grid } from '@loft/copan-components';
import { screen, spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC, ReactChild, ReactElement } from 'react';
import { Footer, Header } from './';

type LayoutProps = {
  children: ReactChild | ReactChild[];
  withHeader?: boolean;
  withFooter?: boolean;
};

const useStyles = makeStyles({
  withHeader: {
    paddingTop: spacing['08'],

    [`@media (min-width: ${screen.breakpoint.md}px)`]: {
      paddingTop: spacing['09'],
    },
  },
});

export const Layout: FC<LayoutProps> = (props: LayoutProps): ReactElement => {
  const { children, withHeader, withFooter } = props;
  const classes = useStyles();

  return (
    <>
      {withHeader && <Header />}
      <Grid container maxWidth="lg" className={clsx(withHeader && classes.withHeader)}>
        <Grid item xs={12}>
          {children}
          {withFooter && <Footer />}
        </Grid>
      </Grid>
    </>
  );
};
