import React from "react";
import { useState } from "react";
const Fruit = () => {
  const [fruit, setFruit] = useState([]);

  const addFruit = (newFruit) => {
    const updatedFruit = [...fruit, newFruit];
    setFruit(updatedFruit);
  };

  const handleFruit = (e) => {
    setFruit(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmitFruit = (e) => {
    e.preventdefault();
  };
  const renderedFruits = fruit.map((f, i) => {
    return <li key={i}>{f}</li>;
  });

  return (
    <div>
      <ul>{renderedFruits}</ul>;
      <div>
        <label htmlFor="">Fruit Name</label>
        <input
          type="text"
          name=""
          id=""
          onChange={handleFruit}
          onSubmit={addFruit}
          className="border border-gray-600 px-2"
        />
      </div>
      <button
        onClick={handleSubmitFruit}
        className="border border-gray-600 px-2 bg-purple-400 rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default Fruit;
