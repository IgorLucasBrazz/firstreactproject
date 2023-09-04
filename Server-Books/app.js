const express = require("express")
const routeBook = require("./routes/book")
const routeFavorite = require("./routes/favorite")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use('/book', routeBook)
app.use('/favorites', routeFavorite)


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})