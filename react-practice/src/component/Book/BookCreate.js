import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col bg-cyan-300 w-fit p-6 gap-3"
      >
        <h3 className="text-2xl font-bold text-white">Add a Book</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={handleChange}
          className="  outline-none rounded-md p-2"
        />
        <button className="p-2 bg-white rounded-md">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
