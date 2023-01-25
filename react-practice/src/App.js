import { Route, Router } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Sidebar from "./component/Sidebar";
import Signup from "./component/SignUp";
import State from "./component/State";
import Test from "./component/Test";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign" element={<Signup />} />
        <Route path="/state" element={<State />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
