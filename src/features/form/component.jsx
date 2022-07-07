import { useState } from "react"

export const Form = ({cart, setCart}) => {
   const [productId, setProductId] = useState('');
   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState('');

   const idInputHandler = (e) => {
      setProductId(e.target.value);
   }

   const nameInputHandler = (e) => {
      setProductName(e.target.value);
   }

   const priceInputHandler = (e) => {
      setProductPrice(e.target.value);
   }

   const submitProductHandler = (e) => {
      e.preventDefault();

      setCart([
         ...cart,
         {
            id: productId,
            name: productName,
            price: productPrice,
         }
      ]);

      setProductId('');
      setProductName('');
      setProductPrice('');
   };

   return(
      <form>
         <input 
            type="number"
            placeholder='Enter product Id'
            value={productId}
            onChange={idInputHandler}
         />
         <input 
            type="text"
            placeholder='Enter product Name'
            value={productName}
            onChange={nameInputHandler} 
         />
         <input 
            type="number" 
            placeholder='Enter product Price'
            value={productPrice}
            onChange={priceInputHandler}
         />
         <button
            onClick={submitProductHandler}
         >
            Add product to Cart
         </button>
      </form>
   )
}