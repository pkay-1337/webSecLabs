let express = require('express');
const path = require('path')
let app = new express();

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(process.cwd(),'index.html'))
})
app.get('/auth',(req,res)=>{
    res.send('Work in progress')
})
app.listen(8080)