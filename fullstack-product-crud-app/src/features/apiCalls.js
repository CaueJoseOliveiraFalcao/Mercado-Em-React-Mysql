import axios from 'axios'

export const getProducts = async () =>{
    try {
        const res = await axios.get('http://localhost:8081/products/');
        return res.data;
    }
    catch (err) {
        console.log(err);
        return err;
    };
};
export const getProductbyId = async (ProductId) =>{
    try {
        const res = await axios.get('http://localhost:8081/products/' + ProductId);
        return res.data
    }
    catch (err){
        console.log(err);
        return err
    };
}
export const addProduct = async (requestedProduct) =>{
    try {
        const res = await axios.post('http://localhost:8081/products/', requestedProduct);
        return res.data;
    }
    catch (err){
        console.log(err);
        return err;
    };
}
export const deleteProduct = async (ProductId) =>{
    try {
        const res = await axios.delete('http://localhost:8081/products/' + ProductId);
        return res.data;
    }
    catch (err){
        console.log(err);
        return err;
    };
}