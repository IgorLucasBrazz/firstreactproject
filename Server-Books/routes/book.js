const { Router } = require("express")
const {getBooks, getABookID, postBook, patchBook, deletedBook} = require("../controllers/book")

const router = Router()

router.get('/', getBooks)
router.get('/:id', getABookID)
router.post('/', postBook)
router.patch('/:id', patchBook)
router.delete('/:id', deletedBook)
//router.get('/:name', getABookName)


module.exports = router