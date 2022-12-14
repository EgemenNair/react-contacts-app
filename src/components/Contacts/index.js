import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
