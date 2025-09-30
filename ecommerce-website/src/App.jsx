import Header from "./components/Products/Header";
import ProductList from "./components/Products/ProductList";
import Cart from "./components/Cart/Cart"
import { useState } from 'react';


function App() {
  
   const [showCart, setShowCart] = useState(false);

  const handleCartOpen = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  return (
    <>
    
  <Header onCartClick={handleCartOpen}></Header>
  <ProductList></ProductList>
  <Cart show = {showCart} handleClose = {handleCartClose} items = {cartElements}/>
  
    </> 
  );
}

export default App;
