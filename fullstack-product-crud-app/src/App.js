
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Product from './components/Product';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
               <Route path='/addProduct' element={<AddProduct/>}/>
               <Route path='/updateproduct/:id' element={<AddProduct/>}/>
               <Route path="/" element={<Product />} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
