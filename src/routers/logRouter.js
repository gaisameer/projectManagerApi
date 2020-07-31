require('../db/db')
const express = require('express')
const router = new express.Router 
const Log = require('../models/logs')

router.get('/log',async(req,res)=>{
    res.send('hi log')
})


module.exports = router