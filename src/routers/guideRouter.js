require('../db/db')
const express = require('express')
const router = new express.Router 
const Guide = require('../models/guide')

router.get('/guide',async(req,res)=>{
    res.send('hi guide')
})


module.exports = router