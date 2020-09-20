//express variable
const express= require('express');
//express router variable
const router= express.Router();
const controllerUser= require('../controller/users');


router.get('/getusers', controllerUser.getUsers)
router.get('/users/:id', controllerUser.getUserById)
router.post('/users', controllerUser.createUser)
router.put('/users/:id', controllerUser.updateUser)
router.delete('/users/:id', controllerUser.deleteUser)

module.exports= router;