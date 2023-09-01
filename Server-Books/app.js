const express = require("express")
const routeBook = require("./routes/book")
const app = express()
app.use(express.json())

const port = 8000

app.use('/book', routeBook)


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})