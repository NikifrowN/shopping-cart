import { useState } from "react";

export const Discount = ({setDiscount}) => {
   const [discountInput, setDiscountInput] = useState(0);

   const discountInputHandler = (e) => {
      setDiscountInput(e.target.value);
   }

   const submitDiscount = (e) => {
      e.preventDefault();

      setDiscount(discountInput);
   }

   const deleteDiscount = (e) => {
      e.preventDefault();

      setDiscount(0);
   }

   return(
      <form>
         <input 
            type="number"
            min={0}
            max={100}
            placeholder='Enter Discount'
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
   )
}