import Shoes from './../shoes.json'
import './Product.css';
import {ItemCard} from './itemCard'

function Product() {
  
  return (
      <div className= "container-fluid d-flex justify-content-center">

          <div className="row">
        
                  {Object.keys(Shoes).map( keyName => {

                      const shoe = Shoes[keyName]

                      return(
                       
                           ItemCard(shoe.img, shoe.name) 
                    
                              
                      ) 


                  })}

              </div>

      </div>
          
    );
  }
  
  export default Product;