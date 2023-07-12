
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import cart from './pages/Cart/cart';
import shop from './pages/shop/shop';
import Shop from './pages/shop/shop';
import Cart from './pages/Cart/cart';
import { ShopContextProvider } from './pages/Context/Shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Navbarr/>
      <Routes>
        <Route path='' element={<Shop/>}  />
        <Route path='cart'element={<Cart/>}   />
        </Routes>
      </ShopContextProvider>
     
    </div>
  );
}

export default App;
