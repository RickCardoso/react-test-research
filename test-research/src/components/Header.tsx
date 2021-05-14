import { Header as CopanHeader, HeaderProps as CopanHeaderProps } from '@loft/copan-components';
import React, { FC, ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFullName, IContact } from '../store/contact';

export enum Pages {
  Home = 'home',
  Posts = 'posts',
  Contact = 'contact',
  About = 'about',
}

export type HeaderProps = {
  contactFullName?: string;
  contactEmail?: string;
};

const _Header: FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  const messages: any = useIntl().messages.app;

  const navigationItems = [
    { text: messages.home, href: '/' },
    { text: messages.posts, href: '/posts' },
    { text: messages.contact, href: '/contact' },
    { text: messages.about, href: '/about' },
  ];

  const headerProps: CopanHeaderProps = {
    logoHref: '/',
    logoHrefAriaLabel: messages.logoAriaLabel,
    items: navigationItems,
    position: 'fixed',
  };

  if (props.contactFullName && props.contactEmail) {
    headerProps.profile = {
      avatar: {
        name: props.contactFullName,
        email: props.contactEmail,
      },
      items: [{ text: messages.home, href: '/' }],
    };
  }

  return <CopanHeader {...headerProps} />;
};

const mapStateToProps = (state: any, props: HeaderProps) => {
  const contact: IContact = state.contact;
  return {
    ...props,
    contactFullName: getFullName(contact.data),
    contactEmail: contact.data.email,
  };
};

export const Header: FC<HeaderProps> = compose(connect(mapStateToProps))(_Header);
