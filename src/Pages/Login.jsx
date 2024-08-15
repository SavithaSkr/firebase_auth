import React, { useEffect, useState } from "react";
import auth from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged in");
        navigate("/home");
      } else {
        console.log("Logged out");
      }
    });
  }, []);

  const loginUser = () => {
    signInWithEmailAndPassword(auth, user, pass)
      .then(() => {
        alert("User Logged In");
        navigate("/home");
      })
      .catch(() => {
        alert("Failed to login");
      });
  };

  return (
    <div className="flex flex-col max-w-sm px-5 mx-auto mb-4 border rounded shadow appearance-none py-7 m-7">
      <h2 className="my-5 text-3xl font-bold text-center text-red-600 ">
        Login
      </h2>
      <hr />
      <div className="w-5 mt-5 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          UserName
        </label>{" "}
        <input
          className="p-2 border rounded shadow outline-none appearance-none "
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="w-5 py-2 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          Password
        </label>{" "}
        <input
          type="password"
          className="p-2 border rounded shadow outline-none appearance-none "
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="justify-center py-5">
        <button
          className="items-center justify-between inline-block px-10 py-2 rounded boder-none bg-cyan-400"
          onClick={loginUser}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
