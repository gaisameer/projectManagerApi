const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userShema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    registrationId : {
        type : String,
        trim : true,
        // required : true,
        default : 'TVE17CS001'
    },

    dept : {
        type : String,
        trim : true,
        default : 'CS'
    },

    password :{
        type : String,
        required : true,
        trim : true,
        minlength : 8
})


userSchema.pre('save',async function(next){
    const user = this
  
    if(user.isModified('password')){
      user.password = await bcrypt.hash(user.password,8)
    }
  
    next()
  })
  
  
  
const user = mongoose.model('user',userSchema)
  
  
  
module.exports = user