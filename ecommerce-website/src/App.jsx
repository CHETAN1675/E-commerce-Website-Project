import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Products/Header";
import Footer from "./components/Layout/Footer";
import CartProvider  from './CartContext/CartProvider';
import Routers from "./components/routers/routers";
import { AuthContextProvider } from "./CartContext/AuthContext";

function App() {
  return (
    <Router>
    <CartProvider>
      <AuthContextProvider>
    <Header></Header>
    <Routers></Routers>
    <Footer></Footer>
    </AuthContextProvider>
    </CartProvider> 
    </Router>
  );
}

export default App;
