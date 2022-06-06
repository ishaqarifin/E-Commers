import React, { useContext, useEffect } from "react";
import { Routes, Route, 
  useNavigate
 } from 'react-router-dom'

import Product from "./admin/Product";
import Auth from "./components/Auth"
import Profile from "./components/profile/profile"
import Products from "./components/products/Product"
import Complain from "./components/complain/Complain"
import DetailProduct from "./components/products/DetailProduct"
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ComplainAdmin from "./admin/ComplainAdmin";
import Category from "./admin/Category"
import EditCategory from "./admin/EditCategory";
import Cart from "./components/profile/Cart";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./components/context/useContext";
import AddCategory from "./admin/AddCategory";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.name === "admin") {
        navigate("/product");
      } else {
        navigate("/products");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Auth />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/complain" element={<Complain />} />
      <Route path="/detail/:id" element={<DetailProduct />} />

      <Route path="/complainadmin" element={<ComplainAdmin />} />

      <Route path="/product" element={<Product />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="/addproduct" element={<AddProduct />} />
      
      <Route path="/category" element={<Category />} />
      <Route path="/editcategory/:id" element={<EditCategory />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
