const express=require('express')
const Router=express.Router()
const user_controller=require('../controllers/user.controller')

Router.route('/users').post(user_controller.user_creation)


module.exports=Router