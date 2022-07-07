import { useState } from 'react';
import { Cart } from '../features/cart/component';
import { Discount } from '../features/discount/component';
import { Form } from '../features/form/component';
import { Stats } from '../features/stats/component';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  //console.log(cart)
  return (
    <div className="App">
      <header>
        <h1>
          Shopping cart
        </h1>
      </header>
      <main className='wrapper' >
        <div className='control-panel'>
          <Form cart={cart} setCart={setCart} />
          {cart.length ? (
            <div className='info-panel'>
              <Discount setDiscount={setDiscount} />
              <Stats cart={cart} discount={discount} />
            </div>
          ) : (<p>Your Cart is empty</p>)}
          </div> 
        <Cart cart={cart} setCart={setCart} discount={discount}/>
      </main>
    </div>
  );
}

export default App;
