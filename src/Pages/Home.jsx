import { signOut } from "firebase/auth";
import React from "react";
import auth from "../config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="flex flex-col items-center justify-center p-10 text-sm text-green-800 border rounded bg-green-50 boder-green-400 h-max">
      <p>Login Success.</p>
      <br />
      <br />
      <br />
      <p className="p-4 ">You are at home page</p>
      <br />
      <br />
      <button
        className="items-center justify-between inline-block px-10 py-2 rounded boder-none bg-cyan-400"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
