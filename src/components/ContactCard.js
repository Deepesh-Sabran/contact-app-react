import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { name, email, phone } = props.contact;
  return (
    <div className="ui items">
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        />
      </div>
    </div>
  );
};

export default ContactCard;
