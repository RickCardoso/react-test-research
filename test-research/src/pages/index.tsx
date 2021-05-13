import { Grid, Image, Typography } from '@loft/copan-components';
import { screen, spacing } from '@loft/copan-tokens';
import { makeStyles } from '@material-ui/core';
import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { compose } from 'redux';
import { Layout } from '../components';

const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: `url(${require('../../public/images/mobile/hero.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: spacing['04'],
    marginTop: spacing['04'],
    marginBottom: spacing['04'],

    [`@media (min-width: ${screen.breakpoint.sm}px)`]: {
      backgroundImage: `url(${require('../../public/images/desktop/hero.png')})`,
    },
  },
}));

const Index: NextPage = (): ReactElement => {
  const messages: any = useIntl().messages.home;
  const classes = useStyles();

  return (
    <Layout withHeader={true} withFooter={true}>
      <div className={classes.hero}>
        <Typography color="inverted" component="h1" variant="h1">
          {messages.pageTitle}
        </Typography>
      </div>
      <Grid container inner>
        <Grid item md={4} sm={4} xs={12}>
          <Image
            src={require('../../public/images/desktop/how_it_works.png')}
            sets={[
              {
                srcSet: require('../../public/images/desktop/how_it_works.png?webp'),
                type: 'image/webp',
              },
            ]}
            placeholder={require('../../public/images/desktop/how_it_works.png?lqip')}
            alt={messages.howItWorks}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="subtitle" component="h2">
            {messages.pageSubTitle}
          </Typography>
          <Typography>{messages.introduction}</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default compose()(Index);
