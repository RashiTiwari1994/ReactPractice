import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form";
import Navbar from "../Navbar";
import Test from "../Test";
const Login = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/sign");
  };
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const [lastName, setLastName] = useState("");
  const handleChangeLast = (e) => {
    setLastName(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };
  console.log(name);
  return (
    <div>
      <div className="App">
        <h1 className="text-2xl text-red-500">Learning React Js</h1>

        <div>
          {!show ? (
            <button
              className="border border-gray-400 p-2 m-4"
              onClick={() => {
                setShow(true);
              }}
            >
              Click Me!!
            </button>
          ) : (
            <button
              className="border border-gray-500 p-2 m-4"
              onClick={gotoSignup}
            >
              Hello!! React js
            </button>
          )}
          {open ? (
            <button className="border border-gray-500 p-2 m-4" onClick={hide}>
              Show
            </button>
          ) : (
            <button className="border border-gray-500 p-2 m-4" onClick={hide}>
              Hide
            </button>
          )}
        </div>
      </div>

      <Test content="Using react library" />
      <Navbar hide={hide} open={open} toggle={setOpen} />

      <Form
        name={name}
        handleChange={handleChange}
        submit={submit}
        lastName={lastName}
        handleChangeLast={handleChangeLast}
      />

      <h1 className="mt-10">
        Hello, My name is :{name}
        {lastName}
      </h1>
    </div>
  );
};

export default Login;
