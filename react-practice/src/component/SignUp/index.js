import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Hello SignUp page</h1>

      <button className="border border-gray-400 p-2 m-2" onClick={goToLogin}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
