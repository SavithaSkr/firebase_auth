import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="flex flex-row justify-center w-full gap-4 p-10 text-lg font-bold shadow text-sky-800">
        <Link className=" hover:text-orange-500" to={"/login"}>
          Login
        </Link>
        {"    "}
        <Link className=" hover:text-orange-500" to={"/signup"}>
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
