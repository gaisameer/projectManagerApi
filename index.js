const express = require('express')

require('./db/db.js')




const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('home')
})



app.listen(port,()=>{
    console.log('server running on ' + port )
})