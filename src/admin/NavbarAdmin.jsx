import React, { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import {UserContext} from "../components/context/useContext"

function NavbarAdmin() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  const handlelogot = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  
  return (
    <div className="w-screen flex items-center justify-between h-[80px] px-10">
      <div className="flex items-center h-10">
        <img src="./assets/logo.png" alt="" className="h-16" />
      </div>

      <div className="w-42 flex ">
        <ul className="flex space-x-5 font-bold">
          <li className="cursor-pointer">
            <Link to="/complainadmin">Complain</Link>
            {/* <a class="text-white hover:text-red-500">Complain</a> */}
          </li>
          <li className="odd:text-red-600">
            <Link to="/category" className="text-white selection:text-red-500">
              Category
            </Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <button onClick={handlelogot}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarAdmin;
