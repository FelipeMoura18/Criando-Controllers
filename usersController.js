function listarUsuarios (req, res){
    const usuarios=[
        {id:1,nome:"Felipe Moura"},
        {id:2, nome:"Gustavo Valente"}
    ];
    res.json(usuarios);
}

module.exports={
    listarUsuarios
};