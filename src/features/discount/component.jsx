import { useState } from "react";
import styles from './styles.module.scss';

export const Discount = ({setDiscount}) => {
   const [discountInput, setDiscountInput] = useState(0);

   // Хэндлер инпута. Сначала получаем скидку в отдельную переменную.
   const discountInputHandler = (e) => {
      setDiscountInput(e.target.value);
   }

   // При сабмите присваиваем её значение скидке.
   const submitDiscount = (e) => {
      e.preventDefault();

      if(discountInput >= 0 && discountInput <=100) {
         setDiscount(discountInput);
      } else {
         alert('Set Discount between 0 and 100');
      }
   }

   const deleteDiscount = (e) => {
      e.preventDefault();

      setDiscount(0);
   }

   return(
      <div className={styles.root}>
         <form className={styles.form}>
            <input 
               type="number"
               min={0}
               max={100}
               value={discountInput}
               onChange={discountInputHandler}
            />
            <button
               onClick={submitDiscount}
            >
               Set Discount
            </button>
            <button
               onClick={deleteDiscount}
            >
               Delete Discount
            </button>
         </form>
      </div>
   )
}