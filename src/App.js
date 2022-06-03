import React from "react";
import { Routes, Route, 
  // useNavigate
 } from 'react-router-dom'
import Product from "./admin/Product";
import Auth from "./components/Auth"
import Profile from "./components/profile/profile"
import Products from "./components/products/Product"
import Complain from "./components/complain/Complain"
import DetailProduct from "./components/products/DetailProduct"

import Category from "./admin/Category"
import ComplainAdmin from "./admin/ComplainAdmin";
import EditCategory from "./admin/EditCategory";
import EditProduct from "./admin/EditProduct";
import Cart from "./components/profile/Cart";
// import { API, setAuthToken } from "./config/api";
// import { UserContext } from "./components/context/useContext";

// if (localStorage.token) {
//   setAuthToken(localStorage.token)
// }
function App() {
  // let navigate = useNavigate()
  // const [state, dispatch] = useContext(UserContext)

  // useEffect(() => {
  //   if (state.isLogin == false) {
  //     navigate('/')
  //   } else {
  //     if (state.user.role == "admin") {
  //       navigate('/product')
  //     } else {
  //       navigate('/products')
  //     }
  //   }
  // },[state])

  // const checkUser = async ()=> {
  //   try {
  //     const response = await API.get('/check_auth')
  //     console.log(response);
  //     if (response.status === 404) {
  //       return dispatch({
  //         type: 'AUTH_ERROR'
  //       })
  //     }

  //     let payload = response.data.data.user
  //     payload.token = localStorage.token

  //     dispatch({
  //       type: 'USER_SUCCESS',
  //       payload,
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   checkUser()
  // }, [])
  return (
      <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/products" element={<Products /> } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/detail/:id" element={<DetailProduct />} />

          <Route path="/complainadmin" element={<ComplainAdmin />} />
          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/editcategory" element={<EditCategory />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;
