//função responsavel por listar todo produto
function listarProdutos(req,res){
const produtos=[
        {id:1, nome:'Porsche Macan', preco: 430000},
         {id:1, nome:'Porsche 911 GT3 RS', preco: 730000}
    ];
res.json(produtos);
}
//exporta a função para que ela possa ser utilizada 
module.exports={
    listarProdutos
};