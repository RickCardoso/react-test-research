import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import { compose } from 'redux';
import { Layout } from '../../components';
import ListUnits from '../../components/Homes/ListUnits';

const Index: NextPage = (): ReactElement => {
  return (
    <Layout withHeader={true} withFooter={true}>
      <ListUnits x={false} />
    </Layout>
  );
};

// Index.getInitialProps = async ({ req }: NextPageContext): Promise<any> => {
//     return {};
// };

export default compose()(Index);
