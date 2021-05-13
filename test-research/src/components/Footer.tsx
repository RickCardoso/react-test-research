import Link from 'next/link';
import React, { FC, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import useStyles from './Footer.styles';

export const Footer: FC = (): ReactElement => {
  const classes = useStyles();
  const messages: any = useIntl().messages.app;

  return (
    <footer className={classes.footer}>
      <Link href="/about">
        <a title="About">{messages.about}</a>
      </Link>
    </footer>
  );
};
