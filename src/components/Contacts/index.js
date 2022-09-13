import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Barış',
      phone_number: '123123'
    },
    {
      fullname: 'Ahmet',
      phone_number: '456465'
    },
    {
      fullname: 'Ceyda',
      phone_number: '155155'
    },
    {
      fullname: 'Deniz',
      phone_number: '112112'
    }
  ]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
