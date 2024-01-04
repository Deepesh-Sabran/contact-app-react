import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";

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
  const [contacts, setContacts] = useState(() => {
    const retriveContact = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return retriveContact ? JSON.parse(retriveContact) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // we've to pass it as a props in the AddContacts.js so that we get the value
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            Component={() => (
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* sending the list as a this.props. */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
