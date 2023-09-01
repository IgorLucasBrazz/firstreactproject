const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("books.json"))
const novoDado = { id:'3', nome: 'Livro mais que demais' }

fs.writeFileSync("books.json", JSON.stringify([...dadosAtuais, novoDado ]))

console.log(JSON.parse(fs.readFileSync("books.json")))
