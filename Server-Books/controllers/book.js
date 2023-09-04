const {getAllBooks, getBookID, insertBook, modifyBooks, deleteBooks} = require("../server/book")

function getBooks(req, res){
    try{
        const books = getAllBooks()
        res.send(books)
    }catch(error){
        res.status(500).json(error.message)
    }
}

function getABookID(req, res){
    try{
        const id = req.params.id
        
        if(id && Number(id)){
            const book = getBookID(id)
            res.send(book)
        }else{
            res.status(422)
            res.send("id invalido")
        }
    }catch(error){
        res.status(500).json(error.message)
    }
}


function postBook(req, res){
    try{
        const newBookCreate = req.body
        if (req.body.nome){
            insertBook(newBookCreate)
            res.status(201)
            res.send("Livro inserido")
        }
        else{
            res.status(422)
            res.send("Campo nome é obrigatório")
        }
    }catch(error){
        res.status(500).json(error.message)
    }
}
function patchBook(req, res){
    try{
        const id = req.params.id
        const body = req.body
        modifyBooks(body, id)
        res.send("Item modificado!")
    }catch(error){
        res.status(500).json(error.message)
    }
}

function deletedBook(req, res){
    try {
        const id = req.params.id
        deleteBooks(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

/*function getABookName(req, res){
    try{
        const name = req.params.name
        const book = getABookName(name)
        res.send(book)
    }catch(error){
        res.status(500).json(error.message)
    }
}*/




module.exports = {
    getBooks,
    getABookID,
    postBook,
    patchBook,
    deletedBook
}