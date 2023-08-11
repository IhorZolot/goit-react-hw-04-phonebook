import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  InputForm,
  InputName,
  InputNamber,
  Button,
} from './PhonebookContact.styled';

export const ContactForm = ({ checkDuplicateContact, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    if (value.includes('!')) {
      alert('Invalid word');
    }
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const { name, number } = this.state;

    if (checkDuplicateContact(name)) {
      alert(`Contact with name '${name}' already exists.`);
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <InputName>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeInput}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </InputName>
      <InputNamber>
        <label>Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleChangeInput}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputNamber>
      <Button type="submit">Add Contact</Button>
    </InputForm>
  );
};
