export const CartItem = ({cartItem, cart, setCart}) => {

   const deleteHandler = () => {
      setCart(cart.filter((item) => item.id !== cartItem.id));
   }

   return(
      <div>
         <p>{cartItem.id}</p>
         <p>{cartItem.name}</p>
         <p>{cartItem.price}</p>
         <button
            onClick={deleteHandler}
         >
            Delete {cartItem.name} from cart
         </button>
      </div>
   )
}