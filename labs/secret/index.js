let path = require('path')
let app = require(path.resolve(process.cwd(),'server.js'))

app.get('/secret',(req,res)=>{
    function challenge(){
        res.set({
            'WWW-Authenticate':'Basic Realm="SuperUser"'
        })
        res.status(401)
        res.end()
    }
    if(!req.headers.authorization){
        challenge();
    }
    console.log(req.headers.authorization)
    if(req.headers.authorization === 'Basic amh1cmk6IkBqaHVyaSI='){
        res.set({
            "Content-type":"text/html;"
        })
        res.sendFile(path.resolve(process.cwd(),'labs/secret/secret'))
    }else{
        challenge();
    }
})
module.exports='a'