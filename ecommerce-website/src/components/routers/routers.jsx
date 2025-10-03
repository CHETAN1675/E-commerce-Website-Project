import { Routes, Route } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layout/About";
import Home from "../Layout/Home"

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
};

const Routers = () => {
  return (
    <Routes>
    
      <Route path={routePath.Home} element={<Home/>} />
      <Route path={routePath.Store} element={<ProductList />} />
      <Route path={routePath.About} element={<About />} />
    </Routes>
  );
};

export default Routers;
