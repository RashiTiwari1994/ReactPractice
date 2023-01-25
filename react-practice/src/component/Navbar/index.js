import React from "react";

const Navbar = ({ hide, open, toggle }) => {
  return (
    <>
      {open ? (
        <div>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Blog</div>
        </div>
      ) : (
        "Rashi"
      )}
    </>
  );
};

export default Navbar;
