export const Stats = ({cart, discount}) => {
   const totalPrice = cart.
      map(item => +item.price).
      reduce(function(sum, elem) {
         return sum + elem;
      }, 0);
   
   const discountPrice = totalPrice - (totalPrice * discount / 100);   

   return(
      <div>
         <p>You have {cart.length} items in your cart </p>
         {discount === 0 ? (<p>Total price is {totalPrice}</p>) : (
            <p>Total price is <span>{totalPrice}</span> {discountPrice}</p>
         )}
         
      </div>
   )
}