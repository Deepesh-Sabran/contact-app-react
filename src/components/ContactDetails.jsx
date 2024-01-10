import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
  console.log(props);
  return (
    <>
      <br />
      <br />
      <br />
      <div className="main">
        <div className="ui card centered">
          <div className="image">
            <img src={user} alt="user" />
          </div>
          <div className="content">
            <div className="header">{props.name}</div>
            <div className="description">{props.email}</div>
            <div className="description">{props.phone}</div>
          </div>
        </div>
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue floated center">
              Back to contact list
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
