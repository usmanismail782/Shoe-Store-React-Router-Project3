import './Product.css';

export function ItemCard (imageUrl, titleName){


   
return(

    <div className= "col-md-3">
   
        <div className="card text-center">
        <div className="overflow">
            <img src= {imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body text-dark">
            <h4 className="card-title">{titleName}</h4>
            <h3 className="text-secondary">$10.90</h3>
            <p className="card-text text-secondary">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-outline-primary" onChangeCapture= {}>Add to Cart</button>
            </div>
        </div>
        </div>
        </div>
    

)

}
