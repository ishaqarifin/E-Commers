import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/useContext";
import {
  ShoppingCartIcon
} from "@heroicons/react/solid"

function Navbar() {
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  // console.log(state);

  const handlelogot = ()=>{
    dispatch({
      type: 'LOGOUT'
    })
    navigate("/")
  }
  
  return (
    <div className="w-screen flex items-center justify-between h-[80px] px-10">
      <div className="flex items-center h-10">
        <Link to="/products">
          <img src="./assets/logo.png" alt="" className="h-16" />
        </Link>
      </div>
      <div className="w-42 flex ">
        <ul className="flex space-x-5 font-bold">
          <li className="hover:animate-bounce bg-slate-500 text-center">
            <Link to="/complain">
              <div className="m-auto">Complain</div>
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingCartIcon className="hover:animate-bounce h-5 text-center font-bold" />
            </Link>
          </li>
          <li>
            {/* <Link to="/"> */}
            <button onClick={handlelogot}>Logout</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
