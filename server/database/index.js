const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/bandmap', { useNewUrlParser: true })

module.exports = {
    User: require('./models/User')(mongoose),
    Band: require('./models/Band')(mongoose)
}
