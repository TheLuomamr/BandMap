const express = require('express')
const bodyParser = require('body-parser')
const seed = require('./database/seed')
const favorites = require('./routes/favorites')

async function initServer(){
    try{
        const app = express()
        app.use(bodyParser.json())
    await seed()
    app.get('/hey', (req, res, next) =>{ 
        res.send(`hey ${ req.query.message}`)
    })
    // users/:id/favorites
    if(app) {
        favorites(app)
    }
    
    return app.listen(8080, (err, res)=>{
        console.log('app lsitening')
    })
}
catch(err) {
    console.log(err)
    throw err
}
}

initServer().then().catch(console.error)