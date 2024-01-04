import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  // props is from App.js where we create a contact[] list

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <br />
      <br />
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
