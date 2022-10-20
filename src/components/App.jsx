import { ToastContainer } from 'react-toastify';

import { ContactForm, Filter, ContactList } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export function App() {
  const { data: contacts = [] } = useGetContactsQuery();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
    </>
  );
}
