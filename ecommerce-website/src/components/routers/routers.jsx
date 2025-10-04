import { Routes, Route } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layout/About";
import Home from "../Layout/Home"
import ContactUs from "../Layout/ContactUs";

const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
};

const Routers = () => {
  return (
    <div>
    <Routes>
    
      <Route path={routePath.Home} element={<Home/>} />
      <Route path={routePath.Store} element={<ProductList />} />
      <Route path={routePath.About} element={<About />} />
     <Route path={routePath.ContactUs} element={<ContactUs/>} />
    </Routes>
    </div>
  );
};

export default Routers;
