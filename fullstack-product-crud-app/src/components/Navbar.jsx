import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Product from './Product';
import AddProduct from './AddProduct';
function Navbar() {
    return (
      <div>
        <BrowserRouter>
           <Routes>
               <Route path='/addProduct' element={<AddProduct/>}/>
               <Route path='/updateproduct/:id' element={<AddProduct/>}/>
           </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default Navbar;
  