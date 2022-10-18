import { React } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Loader from "./loader/loader";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addContact, deleteContact, fetchContacts } from "../redux/contacts-operations";
import { changeFilter } from "redux/filter-actions"; 
import { getFilteredContacts } from "redux/contacts-selectors"; 
import { getFilter } from "redux/filter-selector";
import { getLoader } from "redux/loader-selector";


const App = () => {
 
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const loader = useSelector(getLoader);

    const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(fetchContacts())
   }, [dispatch]);
  
  const newContact = (name, phone) => {
    const action = addContact({ name, phone} );
    dispatch(action)
  }
 
  
  const removeContact = (payload) => {
    dispatch(deleteContact(payload));
  };

 const textFilter = ({target}) => {
        dispatch(changeFilter(target.value))
    }

    return (
      <SectionStyle>
    <Section title="PhoneBook">
          <ContactForm onSubmit={newContact} contacts={contacts} />
       </Section>
        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={textFilter}
          />
          {loader && <Loader/>}
         <ContactList
            contacts={contacts}
            onDelete={removeContact}
           />
        </Section>
        <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          
/>
        </SectionStyle>
  );
  }
 

export default App

const SectionStyle = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 15px;
  margin: 70px auto;
  box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  background-color: #ebdacf;

`;