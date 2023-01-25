import React from "react";
import { useState } from "react";
const State = () => {
  const [value, setValue] = useState();
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <div className="m-8">
        <form action="">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border border-gray-300 outline-none"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border border-gray-300 outline-none"
            onChange={handleEmail}
          />
        </form>

        <p>The Name of a person: {value}</p>
        <p>The Email of a person:{email}</p>
      </div>
    </div>
  );
};

export default State;
