const { User, Band } = require('../database')
module.exports = function(app) {
    app.get('/users/:username/favorites', (req, res, next) =>{ 

        User.findOne({
            username: req.params.username
        }).populate('favoriteBands')
            .then(result => {
                res.json(result.favoriteBands || [])
            }).catch(err => { 
                console.error(err)
                next()
            })
    })
    app.post('/users/:username/favorites', (req, res, next) =>{ 
        res.send(`hey ${ req.params.username }`)
    })
}
