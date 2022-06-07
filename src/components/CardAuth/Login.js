import React, { useContext, useState } from 'react'
import { UserContext } from '../../components/context/useContext';
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import { API } from '../../config/api';

function Login() {
  let navigate = useNavigate();
  
  const [state, dispatch] = useContext(UserContext)
  console.log(state);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  // const {email, password} = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      const config = {
        headers: {
          "content-type": "application/json"
        }
      }

      const body = JSON.stringify(form)

      const response = await API.post('/login', body, config)
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data
        })
        if (response.data.data.role === "admin") {
          navigate('/product')
        } else {
          navigate('/')
        }
      }

    } catch (error) {
      const alert = (
        <div role="alert">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-1 mt-2">
            Failed
          </div>
        </div>
        );
      setMessage(alert);
      console.log(error);
    }    
  })

  return (
    <div className="w-full max-w-xs">
      <form className="dark:bg-stone-900 bg-slate-300 shadow-md rounded px-8 pt-6 pb-8" onSubmit={(e) => handleSubmit.mutate(e)}>
        <span className="text-2xl font-bold">Login</span>
        {message && message}
        <div className="my-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            // value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            // value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          {/* <Link to="products"> */}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
            Sign In
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default Login