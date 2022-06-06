import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Login from "./CardAuth/Login"
import Register from "./CardAuth/Register";
// import { UserContext } from "./context/useContext";

function Auth() {
  // let navigate = useNavigate();

  // const [state] = useContext(UserContext);

  // const checkAuth = () => {
  //   if (state.isLogin === true) {
  //     navigate("/");
  //   }
  // };
  // checkAuth();

  const [login, setLogin] = useState(true)

  const handleLogin= ()=>(
    setLogin(true)

  )
  const handleRegister=()=>{
    setLogin(false)
  }

  return (
    <div className="flex md:flex h-screen">
      <div className="flex flex-col basis-6/12 ml-24 justify-center text-left">
        <img src="./assets/logo.png" alt="logo" style={{ width: "200px" }} />
          <div className="text-5xl font-bold my-6">
            Easy, Fast and Reliable
          </div>
          <p className="w-2/3">Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
          <div className="flex items-center mt-10">
            <button onClick={handleLogin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <button onClick={handleRegister} className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-10" type="button">
              Register
            </button>
          </div>
        </div>

      <div className="basis-6/12 flex items-center">
        {login?<Login /> : <Register />}
      </div>
    </div>
  );
}

export default Auth;
