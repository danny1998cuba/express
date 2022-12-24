const Router = require('express').Router
const router = Router()

const { userController, exerciseController } = require('../controllers')

router.get('/users', userController.getAll)

module.exports = router