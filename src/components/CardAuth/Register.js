import React, { useContext } from 'react'
import { UserContext } from "../../components/context/useContext";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };

    dispatch({
      type: "login",
      payload: data,
    });
    // history.push("/complainadmin");
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-stone-900 shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
        <span className="text-2xl font-bold">Register</span>
        <div className="my-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="username" type="name" placeholder="Name" />
        </div>
        <div className="my-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          id="password" type="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register