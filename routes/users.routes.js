const Router = require('express').Router
const router = Router()

const { userController, exerciseController } = require('../controllers')

router.get('/users', userController.getAll)     //list of all users. array of {username, _id}
router.post('/users', userController.addOne);   //add an user

router.post('/users/:_id/exercises', exerciseController.createExercise)

router.get('/users/:_id/logs', exerciseController.getLogs)

module.exports = router