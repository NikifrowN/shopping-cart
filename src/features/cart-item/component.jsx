import styles from './styles.module.scss';

export const CartItem = ({cartItem, cart, setCart, discount}) => {

   // Хэндлер удаления товара из корзины.
   const deleteHandler = () => {
      setCart(cart.filter((item) => item.id !== cartItem.id));
   }

   // Расчёт скидки. 
   const discountPrice = cartItem.price - (cartItem.price * discount / 100);;
   
   return(
      <div className={styles.root}>
         <p>Product Id: {cartItem.id}</p>
         <p>Product name: {cartItem.name}</p>
         {discount === 0 ? (<p>Price: {cartItem.price}</p>) : (
            <p>Price: <span>{cartItem.price}</span> {discountPrice}</p>
         )} 
         <button
            onClick={deleteHandler}
         >
            Delete item from cart
         </button>
      </div>
   )
}