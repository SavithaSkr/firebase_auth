import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col max-w-sm px-5 mx-auto mb-4 border rounded shadow appearance-none py-7 m-7">
      <h2 className="my-5 text-3xl font-bold text-center text-red-600 underline">
        Signup
      </h2>
      <div className="w-5 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          UserName
        </label>{" "}
        <input
          className="p-2 border rounded shadow appearance-none "
          type="text"
        />
      </div>
      <div className="w-5 py-2 mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          Password
        </label>{" "}
        <input
          type="text"
          className="p-2 border rounded shadow appearance-none "
        />
      </div>
      <div className="justify-center py-5">
        <button className="items-center justify-between inline-block px-10 py-2 rounded boder-none bg-cyan-400">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
