import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col max-w-sm m-5 mx-auto mb-4">
      <div className="w-5 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          UserName
        </label>{" "}
        <input
          className="p-2 border rounded shadow appearance-none "
          type="text"
        />
      </div>
      <div className="w-5 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          Password
        </label>{" "}
        <input
          type="text"
          className="p-2 border rounded shadow appearance-none "
        />
      </div>
      <div>
        <button className="items-center justify-between inline-block px-10 py-2 rounded boder-none bg-cyan-400">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
