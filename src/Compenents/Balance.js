import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { ItemList } = useContext(GlobalContext)
  
    const amounts = ItemList.map(new_Item => new_Item.amount)
    let balance = amounts.reduce((total, currentValue) => total = total + currentValue, 0);
    let sign = balance < 0 ? '-' : '';


    
    return (
        <>

            <h4> Total Amount </h4>
            <h1>{sign}${Math.round(balance)}</h1>
        </>
    )

}

