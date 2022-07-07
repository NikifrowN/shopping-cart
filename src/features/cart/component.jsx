import { CartItem } from "../cart-item/component"

export const Cart = ({cart, setCart}) => {

   return cart.length? (
      <div>
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