require('../db/db')
const express = require('express')
const router = new express.Router 
const Project = require('../models/project')

router.get('/project',async(req,res)=>{
    res.send('hi project')
})


module.exports = router