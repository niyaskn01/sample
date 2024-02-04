const express=require('express')
const { createDataController, getDataController } = require('../controllers/dataController')
const router=express.Router()

//create
router.post('/create',createDataController)

//get
router.get('/get',getDataController)

module.exports=router