const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors())

app.get('/products' , (req,res) => {
    const SqlComandLine = 'select * from products';
    db.query(SqlComandLine, (error , data) => {
        console.log(error , data);
        if (error) return res.json({error : error.sqlMessage});
        else return res.json({ data });
    });
});
app.post('/products' , (req , res) => {
    const SqlComandLine = `insert into product(productid, producttitle , productdescription , productprice , availableQuantity , productthumbnail)
        values(?)`;
    const values = [...Object.values(req.body)];
    console.log('insert' , values);
    db.query(SqlComandLine , [values] , (error , data) => {
        console.log(error , data);
        if (error) return res.json({error : error.sqlMessage});
        else return res.json({data});

    })
})
app.get('/products/:productid' , (req , res) => {
    const SqlComandLine  = 'SELECT * FROM product where productid=?';
    const id = req.params.productid;
    db.query(SqlComandLine , [id] , (error , data) =>{
        console.log(error , data);
        if (error) return res.json({error : error.sqlMessage});
        else return res.json({data});
    })
});
app.put('/products/productid' , (req , res) => {
    const id = req.params.productid
    const data = req.body;
    const SqlComandLine = 'UPDATE product SET ' + Object.keys(data).map((k) => `${k} = ?`).join(",") + " WHERE productid = '" + id + "'";
    console.log(SqlComandLine);
    db.query(SqlComandLine , [...Object.values(data)] , (error , out) => {
        console.log(error , out);
        if (error) return res.json({error : error.sqlMessage});
        else return res.json({data:out});
    })
})
app.delete('/products/:productid' , (req , res) => {
    const id = req.params.productid;
    const SqlComandLine = `DELETE FROM product WHERE productid = ?`;
    const { productThumbnail } = req.body;
    db.query(SqlComandLine , [id] , (error , data) => {
        console.log(error , data)
       if (error) return res.json({error : error.sqlMessage});
       else return res.json({data});
    });
});
app.listen(8081 , () =>{
    console.log("listening");
});

process.on('SIGINT', () => {
    db.end();
  });

//db

const mysql = require('mysql');
console.log(process.env);
console.log(process.env.DB_PASSWORD)

const db = mysql.createConnection({
    host : 'localhost',
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: "products",
});