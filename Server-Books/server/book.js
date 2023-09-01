const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookFilter = books.filter( book => book.id === id)
    return bookFilter
}

function insertBook(newBook){
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newListBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}

function modifyBooks(modify, id){
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))

    const indexModify = currentBooks.findIndex( book => book.id === id)
    const change = {...currentBooks[indexModify], ...modify} // dx o codigo melhor
    //EX.:
    // currentBooks[indexModify] -> {id:"2", name: "livro irado"}
    // modifu -> {name: "mucho legal"}

    currentBooks[indexModify] = change

    fs.writeFileSync("books.json", JSON.stringify(currentBooks))


}

function deleteBooks(id){
    const books = JSON.parse(fs.readFileSync("books.json"))
    const bookFilter = books.filter( book => book.id!== id )
    fs.writeFileSync("books.json", JSON.stringify(bookFilter))
}

/*function getNameBook(name){
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookFilter = books.filter(  book => book.name = name )
    return bookFilter
}*/

module.exports = {
    getAllBooks,
    getBookID,
    insertBook,
    modifyBooks,
    deleteBooks
}