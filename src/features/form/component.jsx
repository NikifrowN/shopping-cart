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

      // Валидация в 2 этапа. Первый - на пустые поля, второй - на уникальный id.
      if (productId && productName && productPrice) {
         if (uniqId(cart, productId)) {
            // Добавляем объект нового товара в корзину.
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
         } else {
            // Для простоты сделал алерты. Можно сделать попапы.
            alert('This ID already exists!')
         }
         
      } else {
         alert('You have to fill in all form fields to add item to Cart!');
      }
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