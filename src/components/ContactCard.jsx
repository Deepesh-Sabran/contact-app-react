import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, phone } = props.contact;
  // console.log(props);
  return (
    <div className="ui items">
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              contact: { name, email, phone },
            }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
