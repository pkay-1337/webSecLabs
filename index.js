const path = require('path')
let app = require(path.resolve(process.cwd(),'server.js'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(process.cwd(),'index.html'))
})

let SecretLab = require(path.resolve(process.cwd(),'labs/secret/index.js'))