import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  // props is from App.js where we create a contact[] list
  const renderContactList = props.contacts.map((contact, index) => {
    return <ContactCard contact={contact} key={index} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
