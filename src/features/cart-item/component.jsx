export const CartItem = ({cartItem, cart, setCart, discount}) => {

   const deleteHandler = () => {
      setCart(cart.filter((item) => item.id !== cartItem.id));
   }
   const discountPrice = cartItem.price - (cartItem.price * discount / 100);;
   
   return(
      <div>
         <p>id: {cartItem.id}</p>
         <p>name: {cartItem.name}</p>
         {discount === 0 ? (<p>price: {cartItem.price}</p>) : (
            <p>price: <span>{cartItem.price}</span> {discountPrice}</p>
         )} 
         <button
            onClick={deleteHandler}
         >
            Delete item from cart
         </button>
      </div>
   )
}