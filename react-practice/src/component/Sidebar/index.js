import React from "react";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {
  FaGripHorizontal,
  FaHome,
  FaLayerGroup,
  FaCreativeCommonsShare,
} from "react-icons/fa";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <>
      <FaGripHorizontal className="m-5 cursor-pointer" onClick={toggle} />
      {open ? (
        <div className="bg-purple-500 w-fit p-6 m-8 flex flex-col gap-3">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <FaHome />
            <div> Home</div>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <FaLayerGroup />
            <div>About</div>
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <FaCreativeCommonsShare />
            <div>Contact</div>
          </div>
        </div>
      ) : (
        <div className="bg-purple-500 w-fit p-6 m-8 flex flex-col gap-3">
          <Tippy content="Home" placement="right-start">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <FaHome />
            </div>
          </Tippy>
          <Tippy content="About" placement="right-start">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <FaLayerGroup />
            </div>
          </Tippy>
          <Tippy content="Contact" placement="right-start">
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <FaCreativeCommonsShare />
            </div>
          </Tippy>
        </div>
      )}
    </>
  );
};

export default Sidebar;
