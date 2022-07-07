export const Stats = ({cart}) => {
   const totalPrice = cart.
      map(item => +item.price).
      reduce(function(sum, elem) {
         return sum + elem;
      }, 0);

   return(
      <div>
         <p>You have {cart.length} items in your cart </p>
         <p>Total price is {totalPrice}</p>
      </div>
   )
}