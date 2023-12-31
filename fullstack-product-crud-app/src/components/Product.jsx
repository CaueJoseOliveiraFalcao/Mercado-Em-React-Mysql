import React from "react";
const BASE_API_URL = 'http://localhost:8081';

const Product = ({
    productid,
    producttitle,
    productdescription,
    productprice,
    availableQuantity,
}) =>{
    return(
        <div className="Card">
            <h1 className="Card_Title">{producttitle}</h1>
            <p className="Card_Descripition">{productdescription}</p>
            <p className="Card_Price">{productprice}</p>
            <p className="Card_Quantity">
            {
                availableQuantity > 0 
                ? `In Stock : ${availableQuantity}`
                : 'Out of Stock'
            }
            </p>
        </div>
    )
}
export default Product