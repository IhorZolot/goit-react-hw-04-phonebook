import React from 'react';
import PropTypes from 'prop-types';

import { ButtonDelete, ContactName } from './PhonebookContact.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
      <ul>
        {contacts.map(contact => (
          <ContactName key={contact.id}>
            {contact.name}: {contact.number}
            <ButtonDelete onClick={() => onDeleteContact(contact.id)} >Delete</ButtonDelete>
          </ContactName>
        ))}
      </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};