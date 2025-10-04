import { Routes, Route } from "react-router-dom";
import ProductList from "../Products/ProductList";
import About from "../Layout/About";
import Home from "../Layout/Home"
import ContactUs from "../Layout/ContactUs";
import ProductPage from "../Products/ProductPage";
import AuthForm from "../Auth/AuthFom";
const routePath = {
  Home: "/",
  Store: "/store",
  About: "/about",
   ContactUs: "/contact-us",
  ProductPage: "/store/product",
  Login: "/login",
};

const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path={routePath.Home} element={<Home/>} />
      <Route path={routePath.Store} element={<ProductList />} />
      <Route path={routePath.ProductPage} element={<ProductPage/>}/>
      <Route path={routePath.About} element={<About />} />
      <Route path={routePath.Login} element={<AuthForm />} />
     <Route path={routePath.ContactUs} element={<ContactUs/>} />
    </Routes>
    </div>
  );
};

export default Routers;
