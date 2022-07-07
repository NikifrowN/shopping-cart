import { useState } from 'react';
import { Cart } from '../features/cart/component';
import { Form } from '../features/form/component';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);
  console.log(cart)
  return (
    <div className="App">
      <header>
        <h1>
          Shopping cart
        </h1>
      </header>
      <main className='wrapper' >
        <Form cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </main>
    </div>
  );
}

export default App;
