import React, { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFilter } from './ContactFilter';
import { Container } from './PhonebookContact.styled';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);
  const [filter, setFilter] = useState(INITIAL_STATE.filter);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeSearchValue = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteredData = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const checkDuplicateContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };
  const filteredContacts = getFilteredData();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        checkDuplicateContact={checkDuplicateContact}
        onSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <ContactFilter filter={filter} onChange={handleChangeSearchValue} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};
