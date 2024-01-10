// import React from "react";

// // using class
// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     phone: "",
//   };

//   add = (e) => {
//     e.preventDefault(); // here I'm using a button & I don't want to refresh my page
//     if (
//       this.state.name === "" ||
//       this.state.email === "" ||
//       this.state.phone === ""
//     ) {
//       alert("All fields should be filled !!");
//       return;
//     }
//     // passing from App.js & using function as a props
//     this.props.addContactHandler(this.state);
//     // after submitting we need to clear the input fields
//     this.setState({ name: "", email: "", phone: "" });
//     // this.props.addContactHandler.push("/");
//     // <Route path="/" element={<ContactList />} exact></Route>;
//     // console.log(this.props);
//   };

//   render() {
//     return (
//       <div className="ui main">
//         <br />
//         <br />
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Phone No</label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter your Number"
//               value={this.state.phone}
//               onChange={(e) => this.setState({ phone: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("All fields should be filled !!");
      return;
    }
    props.addContactHandler({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");

    navigate("/");
  };

  return (
    <div className="ui main">
      <br />
      <br />
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone No</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
