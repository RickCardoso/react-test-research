import { Button, Snackbar, Typography } from '@loft/copan-components';
import { Field, Form as FormikForm, Formik, FormikProps } from 'formik';
import React, { FC, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { TextField } from '../../../components';
import { Alert, IContact } from '../../../store/contact';
import useStyles from './Form.styles';

export type FormProps = {
  handleSubmit: (values: any, actions: any) => void;
  handleCloseSnackbar: () => void;
  contact: IContact;
};

export const Form: FC<FormProps> = (props: FormProps): ReactElement => {
  const { contact, handleSubmit, handleCloseSnackbar } = props;
  const classes = useStyles(props);
  const messages: any = useIntl().messages;

  return (
    <Formik initialValues={contact.data} enableReinitialize={true} onSubmit={handleSubmit}>
      {({ isSubmitting }: FormikProps<any>) => (
        <FormikForm>
          <Typography variant="h2" component="h2" color="primary">
            {messages.contact.title}
          </Typography>
          <Field
            className={classes.input}
            id="contact-form-name"
            name="contact-form-name"
            label="Nome"
            fullWidth
            component={TextField}
          />
          <Field
            className={classes.input}
            id="contact-form-lastName"
            name="contact-form-lastName"
            label="Sobrenome"
            fullWidth
            component={TextField}
          />
          <Field
            className={classes.input}
            id="contact-form-email"
            name="contact-form-email"
            label="Email"
            fullWidth
            component={TextField}
          />
          <Field
            className={classes.input}
            id="contact-form-message"
            name="contact-form-message"
            label="Mensagem"
            multiline={true}
            rows={5}
            fullWidth
            component={TextField}
          />
          <Button disabled={isSubmitting} type="submit" color="primary" variant="contained">
            {isSubmitting ? messages.contact.sending : messages.contact.send}
          </Button>
          <Snackbar
            open={contact?.ui?.sending}
            message={messages.contact.sendingContact}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
          />
          <Snackbar
            open={contact?.ui?.alert !== Alert.UNDEFINED}
            message={
              contact?.ui?.alert === Alert.SUCCESS
                ? messages.contact.success
                : messages.contact.error
            }
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
            action={[
              <Button
                onClick={handleCloseSnackbar}
                key="b1"
                size="small"
                color="secondary"
                transparent
              >
                {messages.app.close}
              </Button>,
            ]}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
