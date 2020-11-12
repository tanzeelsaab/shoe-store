import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/cart/index";
import ProductDetails from "./components/Product";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/myCart" component={Cart} />
      <Route path="/product/:id" component={ProductDetails} />
    </BrowserRouter>
  );
}

export default App;
