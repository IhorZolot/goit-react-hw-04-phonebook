import React from 'react';
import PropTypes from 'prop-types';

import { InputFind } from './PhonebookContact.styled';

export const ContactFilter = ({ filter, onChange }) => {
  return (
    <InputFind>
      <h3>Find contacts by name</h3>
      <input type="text" value={filter} onChange={onChange} />
    </InputFind>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

