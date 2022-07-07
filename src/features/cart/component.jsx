import { useState } from "react"
import { CartItem } from "../cart-item/component"
import { Discount } from "../discount/component"
import { Stats } from "../stats/component"

export const Cart = ({cart, setCart}) => {
   const [discount, setDiscount] = useState(0);

   return cart.length? (
      <div>
         <Stats cart={cart} discount={discount} />
         <Discount setDiscount={setDiscount} />
         {cart.map((item) => (
            <CartItem 
               key={item.id}
               cartItem={item}
               cart={cart}
               setCart={setCart}
               discount={discount}
            />
         ))}
         
      </div>
   ) : (
      <p>Shopping cart is empty</p>
   )
}