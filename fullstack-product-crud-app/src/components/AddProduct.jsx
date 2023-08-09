import Navbar from "./Navbar";
import React, {useEffect , useState} from "react";
import "./Addproduct.css";
import  { addProduct }  from "../features/apiCalls";
import { useNavigate } from "react-router-dom";
const BASE_API_URL = 'http://localhost:8081';

function AddProduct() {
  const [defaultValue , setDefaultValue] = useState({
    productTitle : "",
    productDescriptition : "",
    ProductPrice : "",
    avalibleQuantity : "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const FormValues = {
      productTitle : e.target.productTitle.value,
      productDescriptition : e.target.productDescriptition.value,
      ProductPrice : e.target.ProductPrice.value,
      avalibleQuantity : e.target.avalibleQuantity.value,
      productImage : "jog",
    }
    console.log(FormValues)
    try {
      const success = await addProduct(FormValues)
      if (success) navigate("/")
    } catch (err){
      console.log(err)
    }
  };
  return (
    <div>
      <button className="arrowBack" onClick={()=>navigate(-1)}>{"<"}</button>
      <h1>
        {defaultValue.productTitle ? 'Update Product' : 'AddProduct'}
      </h1>
      <div className="fix">
      <div className="formCard">
        <form onSubmit={handleSubmit}>
          <div className="box-form">
            <label htmlFor="productTitle">Product Title</label>
            <input type="text" name="productTitle" />
          </div>
          <div className="box-form">
            <label htmlFor="productDescriptition">Product Descripition</label>
            <input type="text" name="productDescriptition" />
          </div>
          <div className="box-form">
            <label htmlFor="ProductPrice">Product Price</label>
            <input type="number" name="ProductPrice" />
          </div>
          <div className="box-form">
            <label htmlFor="avalibleQuantity">avalibleQuantity</label>
            <input type="number" name="avalibleQuantity" />
          </div>
          <div className="box-form">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      </div>
    </div>

  );
}

export default AddProduct;
