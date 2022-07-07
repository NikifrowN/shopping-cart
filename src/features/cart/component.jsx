import { CartItem } from "../cart-item/component"
import { Stats } from "../stats/component"

export const Cart = ({cart, setCart}) => {

   return cart.length? (
      <div>
         <Stats cart={cart} />
         {cart.map((item) => (
            <CartItem 
               key={item.id}
               cartItem={item}
               cart={cart}
               setCart={setCart}
            />
         ))}
         
      </div>
   ) : (
      <p>Shopping cart is empty</p>
   )
}