
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import './Product.css';

export function ItemCard (imageUrl, titleName){


    const item_amount = 19.9
    const { AddItem, ItemList } = useContext(GlobalContext)
   
    let new_Item= {
        id: Math.random() * 10000,
        itemName:  titleName,
        item_amount: item_amount
      }
    



   
return(

    
    <div className= "col-md-3">
   
        <div className="card text-center">
        <div className="overflow">
            <img src= {imageUrl} className="card-img-top" alt="image"/>
            <div className="card-body text-dark">
            <h4 className="card-title">{titleName}</h4>
            <h3 className="text-secondary">${item_amount}</h3>
            <p className="card-text text-secondary">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <Link to={{ pathname: "/Cart", ItemList }} type="button" className="btn btn-outline-primary" onClick= { () =>  AddItem(new_Item)}>Add to Cart</Link>
            </div>
        </div>
        </div>
        </div>
    

)

}
