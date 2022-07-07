import styles from './styles.module.scss';

export const Stats = ({cart, discount}) => {
   // Общая стоимость корзины.
   const totalPrice = cart.
      map(item => +item.price).
      reduce(function(sum, elem) {
         return sum + elem;
      }, 0);
   
   // Общая стоимость корзины со скидкой.
   const discountPrice = totalPrice - (totalPrice * discount / 100);   

   return(
      <div className={styles.root}>
         <p>You have {cart.length} item(s) in your cart.</p>
         {discount === 0 ? (<p>Total price is {totalPrice} rub.</p>) : (
            <p>Total price is <span>{totalPrice}</span> {discountPrice} rub.</p>
         )}
      </div>
   )
}