let express = require('express');
const { waitForDebugger } = require('inspector');
const path = require('path')
let app = new express();

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(process.cwd(),'index.html'))
})
app.get('/auth',(req,res)=>{
    res.send('Work in progress')
})
app.get('/secret',(req,res)=>{
    if(!req.headers.authorization){
        res.set({
            'WWW-Authenticate':'Basic Realm="Who are You?"'
        })
        res.status(401)
        res.end()
    }
    console.log(req.headers.authorization)
    if(req.headers.authorization === 'Basic amh1cmk6IkBqaHVyaSI='){
        res.set({
            "Content-type":"text/html;"
        })
        res.sendFile(path.resolve(process.cwd(),'secret'))
    }else{
        res.set({
            'WWW-Authenticate':'Basic Realm="Who are You?"'
        })
        res.status(401)
        res.end()
    }
    
})
app.listen(80)