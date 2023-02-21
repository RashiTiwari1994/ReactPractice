import React from "react";

function Input({ onSubmit }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Color</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-600 px-2"
      />
      <button className="border border-gray-600 px-2">Submit</button>
    </form>
  );
}

export { Input };
