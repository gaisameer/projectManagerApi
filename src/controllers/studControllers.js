require('../db/db')
const express = require('express')
const router = new express.Router 
const Student = require('../models/student')


const addStud = async(req,res)=>{
    const stud = new Student(req.body)
    console.log(req.body)
    try{
        await stud.save()
        res.status(201).send(stud)
    }catch(e){
        res.status(400).send(e)
    }
}

const readAll = async(req,res) => {
    try{
        const stud = await Student.find()
        res.send(stud)
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
}

const findOne = async(req,res) => {
    try{
        const stud = await Student.findById(req.params.id)
        if(!stud)
            return res.status(404).send()
        res.send(stud)
    }catch(e){
        console.log(e)
        res.status(500).send()

    }
}

const deleteOne = async(req,res) =>{
    try{
        const stud =await Student.findByIdAndDelete(req.params.id)
        if(!stud)
            return res.status(404).send()
        res.send(stud)
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
}

const modify = async(req,res)=>{
    const allowed = ['name','registrationId','dept','password','projects']
    const updates = Object.keys(req.body)
    const isValid = updates.every((update)=>{
        return allowed.includes(update)
    })

    if(!isValid){
        return res.status(400).send({error : 'invalid updates'})
    }
    try{
        const stud = await Student.findById(req.params.id)
        updates.forEach((update)=>{
            stud[update] = req.body[updates]
        })

        if(!stud){
            return res.status(404).send()
        }
        await stud.save()
        res.send(stud)
    }catch(e){
        res.status(400).send()
    }
}

module.exports = {
    addStud : addStud,
    readAll : readAll,
    findOne : findOne,
    deleteOne : deleteOne,
    modify : modify
}