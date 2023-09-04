const { Router } = require('express')
const {getFavorite, postFavorite, deletedFavorite } = require('../controllers/favorite')

const router = Router()

router.get('/', getFavorite)
router.delete('/:id', deletedFavorite)
router.post('/:id', postFavorite)


module.exports = router