import { contacts, dishes } from './constants';
import { Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import Contacts from './containers/Contacts/Contacts';
import AboutUs from './containers/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './containers/NotFound/NotFound';
import { CartItemInfo, DishInfo } from './types';
import { useState } from 'react';
import Cart from './containers/Cart/Cart';

function App() {
  const [cart, setCart] = useState<CartItemInfo[]>([]);

  const addToCart = (dish: DishInfo) => {
    setCart((cart) => {
      const _cart = [...cart];

      const i = cart.findIndex((x) => x.dish === dish);

      if (i >= 0) {
        _cart[i] = { ..._cart[i], qty: _cart[i].qty + 1 };
      } else {
        _cart.push({ dish, qty: 1 });
      }

      return _cart;
    });
  };

  return (
    <>
      <header>
        <Toolbar cartCount={cart.reduce((a, x) => a + x.qty, 0)} />
      </header>
      <main className='container p-5'>
        <Routes>
          <Route path='/' element={<Home dishes={dishes} addToCart={addToCart} />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts contacts={contacts} />} />
          <Route path='/cart' element={<Cart items={cart} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
