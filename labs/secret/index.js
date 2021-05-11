let path = require('path')
let app = require(path.resolve(process.cwd(),'server.js'))
app.get('/secret',(req,res)=>{
    if(!req.headers.authorization){
        res.set({
            'WWW-Authenticate':'Basic Realm="SuperUser"'
        })
        res.status(401)
        res.end()
    }
    console.log(req.headers.authorization)
    if(req.headers.authorization === 'Basic amh1cmk6IkBqaHVyaSI='){
        res.set({
            "Content-type":"text/html;"
        })
        res.sendFile(path.resolve(process.cwd(),'labs/secret/secret'))
    }else{
        res.set({
            'WWW-Authenticate':'Basic Realm="Who are You?"'
        })
        res.status(401)
        res.end()
    }
})
module.exports='a'