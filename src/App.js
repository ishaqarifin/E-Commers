import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/products" component={Products } />
          <Route path="/profile" component={Profile} />
          <Route path="/complain" component={Complain} />
          <Route path="/detail" component={DetailProduct} />

          <Route path="/complainadmin" component={ComplainAdmin} />
          <Route path="/product" component={Product} />
          <Route path="/category" component={Category} />
          <Route path="/editcategory" component={EditCategory} />
          <Route path="/editproduct" component={EditProduct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
  );
}

export default App;
