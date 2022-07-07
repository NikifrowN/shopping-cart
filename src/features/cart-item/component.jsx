export const CartItem = ({cartItem, cart, setCart}) => {

   const deleteHandler = () => {
      setCart(cart.filter((item) => item.id !== cartItem.id));
   }

   return(
      <div>
         <p>id: {cartItem.id}</p>
         <p>name: {cartItem.name}</p>
         <p>price: {cartItem.price}</p>
         <button
            onClick={deleteHandler}
         >
            Delete item from cart
         </button>
      </div>
   )
}