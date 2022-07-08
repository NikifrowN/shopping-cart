import { useState } from "react";
import styles from './styles.module.scss';

export const Form = ({cart, setCart}) => {
   const [productId, setProductId] = useState('');
   const [productName, setProductName] = useState('');
   const [productPrice, setProductPrice] = useState('');

   // Хэндлеры для всех интпутов.
   const idInputHandler = (e) => {
      setProductId(e.target.value);
   }

   const nameInputHandler = (e) => {
      setProductName(e.target.value);
   }

   const priceInputHandler = (e) => {
      setProductPrice(e.target.value);
   }

   // Проверка id на уникальность. 
   const uniqId = (arr, elem) => {
      const ids = arr.map(item => item.id);
      return !ids.includes(elem);
   }

   // Хэндлер сабмита формы
   const submitProductHandler = (e) => {
      e.preventDefault();

      if (!productId || !productName || !productPrice) {
         alert('You have to fill in all form fields to add item to Cart!');
         return;
      }

      if (productPrice <= 0 || productId <= 0) {
         alert('You can`t use negative numbers or zeros!');
         return;
      }

      if (!uniqId(cart, productId)) {
         alert('This ID already exists!');
         return;
      }

      setCart([
         ...cart,
         {
            id: productId,
            name: productName,
            price: productPrice,
         }
      ]);
      
      // Очистка инпутов после сабмита.
      setProductId('');
      setProductName('');
      setProductPrice('');
   };

   return(
      <div className={styles.root}>
         <form className={styles.form}>
            <input 
               type="number"
               min={0}
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
               min={0}
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
      </div>

   )
}