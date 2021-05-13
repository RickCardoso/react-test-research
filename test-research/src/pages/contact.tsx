import { NextPage } from 'next';
import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Layout } from '../components';
import Form from '../components/Contact/Form';
import { Alert, contactSlice, IContact, submitContactData } from '../store/contact';

type ContactProps = {
  submitContactData: (data: IContact['data']) => void;
  setAlert: (alert: Alert) => void;
  contact: IContact;
};

const Contact: NextPage<ContactProps> = ({ contact, ...props }: ContactProps): ReactElement => {
  const handleSubmit = (values: any, actions: any): void => {
    const { submitContactData } = props;
    actions.setSubmitting(true);
    submitContactData(values);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 5000);
  };

  const handleCloseSnackbar = (): void => {
    const { setAlert } = props;
    setAlert(Alert.UNDEFINED);
  };

  return (
    <Layout withHeader={true} withFooter={true}>
      <Form
        handleCloseSnackbar={handleCloseSnackbar}
        handleSubmit={handleSubmit}
        contact={contact}
      />
    </Layout>
  );
};

// Contact.getInitialProps = async ({ req }: NextPageContext): Promise<any> => {
//     return {};
// };

const mapStateToProps = (state: any) => {
  const contact: IContact = state.contact;
  return {
    contact,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ submitContactData, setAlert: contactSlice.actions.setUiAlert }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Contact);
