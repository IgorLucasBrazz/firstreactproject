const fs = require("fs")

function getAllFavorite() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function deleteFavoriteID(id){
    const books = JSON.parse(fs.readFileSync("favorites.json"))

    const booksFilter = books.filter( book => book.id !== id)
    fs.whiteFileSync("favorites.json", JSON.stringify(booksFilter))
}

function insertFavorite(id){
    const books = JSON.parse(fs.readFileSync("books.json"))
    const favorite = JSON.parse(fs.readFileSync("favorites.json"))

    const insertBook = books.find( book => book.id === id)
    const newListFavorite = [...favorite, insertBook]
    fs.whiteFileSync("favorites.json", JSON.stringify(newListFavorite))

}


module.exports={
    getAllFavorite,
    deleteFavoriteID,
    insertFavorite
}