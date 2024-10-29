import './App.css';
import Navbar from './components/navbar/Navbarr.jsx';
import Footer from './components/footer/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCat from './pages/ShopCat.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path='/' element={<Shop />}></Route> {/* added the home page */}
      <Route path='/mens' element={<ShopCat category="mens"/>}></Route>
      <Route path='/womens' element={<ShopCat category="womens"/>}></Route>
      <Route path='/kids' element={<ShopCat category="kids"/>}></Route>

      {/* products route and id path */}
      <Route path='/product' element={<Product/>}>
      {/* id path in a sub route */}
      <Route path=':productId' element={<Product />}></Route>
      </Route>

      {/* cart and login route */}
      {/* cart */}
      <Route path='/cart' element={<Cart />} />
      {/* login and signup */}
      <Route path='/login' element={<LoginSignup />} />

      </Routes>

      <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
