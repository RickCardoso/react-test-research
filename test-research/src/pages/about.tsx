import { Image, Typography } from '@loft/copan-components';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { Layout } from '../components';

const About: NextPage = (): ReactElement => {
  const messages: any = useIntl().messages.about;

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (
    _event: React.ChangeEvent<unknown>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Layout withHeader={true} withFooter={true}>
      <>
        <Typography component="h2" variant="h2">
          {messages.title}
        </Typography>
        <Image
          src={require('../../public/images/desktop/loft-team.jpg')}
          sets={[
            {
              srcSet: require('../../public/images/mobile/loft-team.jpg?webp'),
              type: 'image/webp',
              media: '(max-width: 600px)',
            },
            {
              srcSet: require('../../public/images/desktop/loft-team.jpg?webp'),
              type: 'image/webp',
              media: '(min-width: 601px)',
            },
            {
              srcSet: require('../../public/images/mobile/loft-team.jpg'),
              type: 'image/jpeg',
              media: '(max-width: 600px)',
            },
          ]}
          placeholder={require('../../public/images/desktop/loft-team.jpg?lqip')}
          alt={messages.loftTeam}
          style={{ width: '100%' }}
        />
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{messages.title1}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{messages.details1}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{messages.title2}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{messages.details2}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </>
    </Layout>
  );
};

export default About;
