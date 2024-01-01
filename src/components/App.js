import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // creating a list to render
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Deepesh",
  //     email: "abc@example.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Gourav",
  //     email: "jkl@example.com",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // we've to pass it as a props in the AddContacts.js so that we get the value
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContact) {
      setContacts(retriveContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {/* sending the list as a this.props. */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
