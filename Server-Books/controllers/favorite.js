const { getAllFavorite, insertFavorite, deleteFavoriteId } = require("../server/favorite")

function getFavorite(req, res){
    try{
        const books = getAllFavorite()
        res.send(books)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res){
    try{
        const id = req.params.id
        insertFavorite(id)
        res.status(201)
        res.send("Livro inserido")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deletedFavorite(req, res){
    try {
        const idBook = req.params.id
        if( id && Number(idBook)) {
            deleteFavoriteId(idBook)
            res.send("Favorito deletado com sucesso!")
        }else{
            res.status(422)
            res.send("ID inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorite,
    postFavorite,
    deletedFavorite
}