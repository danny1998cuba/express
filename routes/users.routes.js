const Router = require('express').Router
const router = Router()

const { userController, exerciseController } = require('../controllers')

router.route('/users')
    .get(userController.getAll)     //list of all users. array of {username, _id}
    .post(userController.getAll);   //add an user

router.post('/users/:_id/exercises', exerciseController.getAll)

router.get('/users/:_id/logs', exerciseController.getAll)

module.exports = router