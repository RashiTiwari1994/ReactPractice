import React from "react";
import { useState } from "react";
const Form = ({ name, handleChange, submit, handleChangeLast, lastName }) => {
  //   const [name, setName] = useState("");
  //   const handleChange = (e) => {
  //     setName(e.target.value);
  //   };
  //   const submit = (e) => {
  //     e.preventDefault();
  //   };
  //   console.log(name);
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="border border-gray-300"
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={handleChangeLast}
          className="border border-gray-300"
        />
      </form>
    </div>
  );
};

export default Form;
