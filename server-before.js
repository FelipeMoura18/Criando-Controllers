//antes de criar um projeto que usa as dependencias do express, 
//abra o terminal e execute:
//npm init -y + npm install express

const express = require ("express");

//criando aplicação do servidor 

const app= express();

//definindo a porta do servidor que ira rodar 
const PORT = 3000;

app.get("/produtos", (req, res)=>{
    //CRIANDO UMA LISTA DOS PRODUTOS
    const produtos=[
        {id:1, nome:'Porsche Macan', preco: 430000},
         {id:1, nome:'Porsche 911 GT3 RS', preco: 730000}
    ];
    //RETORNA LISTA EM FROMATO JSON
res.json(produtos);
});

app.listen(PORT,()=>{
    console.log(`server running into http://localhost:${PORT}`);
});
