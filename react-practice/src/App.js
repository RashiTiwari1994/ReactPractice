import { Route, Router } from "react-router";
import { Routes } from "react-router-dom";
import "./App.css";
import Fruit from "./component/AddElementTesting";
import Book from "./component/Book";
import AppColor from "./component/Color";
import Form2 from "./component/Form2";
import ImageUpload from "./component/ImageUpload";
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
        <Route path="/form" element={<Form2 />} />
        <Route path="/image" element={<ImageUpload />} />
        <Route path="/book" element={<Book />} />
        <Route path="/color" element={<AppColor />} />
        <Route path="/element" element={<Fruit />} />
      </Routes>
    </>
  );
}

export default App;
