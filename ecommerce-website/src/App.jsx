import Header from "./components/Products/Header";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart"
import { useState } from 'react';
import { CartProvider } from './CartContext/CartContext';


function App() {
  
   const [showCart, setShowCart] = useState(false);

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  return (
    <CartProvider>
  <Header onCartClick={handleCartOpen}></Header>
  <ProductList/>
  <Cart show = {showCart} handleClose = {handleCartClose}/>
    </CartProvider> 
  );
}

export default App;
