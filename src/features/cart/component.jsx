import { CartItem } from "../cart-item/component";
import styles from './styles.module.scss';

export const Cart = ({cart, setCart, discount}) => (
   <div className={styles.root}>
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
)