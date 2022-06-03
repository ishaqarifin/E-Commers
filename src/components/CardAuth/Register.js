import React, { useState } from 'react'
import { useMutation } from 'react-query';
// import { UserContext } from "../../components/context/useContext";
// import { useNavigate } from "react-router-dom";
import { API } from '../../config/api'

function Register() {
  // let navigate = useNavigate();

  // const [state, dispatch] = useContext(UserContext);
  // console.log(state);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  // const {name, email, password}= form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);
      console.log(response);
      // Handling response here
    } catch (error) {
      const alert = (
        <alert variant="danger" className="py-1">
          Failed
        </alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <div className="w-full max-w-xs">
      <form className="bg-stone-900 shadow-md rounded px-8 pt-6 pb-8 flex-col" onSubmit={(e) => handleSubmit.mutate(e)}>
        <span className="text-2xl font-bold">Register</span>
        {message && message}
        <div className="my-4">
          <input type="name" placeholder="Name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}/>
        </div>
        <div className="my-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email" placeholder="Email" name="email" onChange={handleChange}/>
        </div>
        <div className="mb-6">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register