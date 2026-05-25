const express = require('express');
const app = express();
const PORT = 3000;

const { listarProdutos } = require("./controllers/productsController.js");
const { listarUsuarios } = require("./controllers/usersController.js"); 

app.get("/produtos", listarProdutos);
app.get("/usuarios", listarUsuarios);

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`); 
});