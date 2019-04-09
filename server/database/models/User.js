const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/bandmap')
const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        description: 'Username'
    },
    email:{
        type: String,
        required: true,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter valid email address."],
        description: "User Email"
    },
    password:{
        type: String,
        require: true
    },
    favoriteBands: [{ type: Schema.Types.ObjectId, ref: 'Band' }],
    // favoriteRoutes: [Schema.Types.ObjectId],
    userCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = function(connection){
    return connection.model('User', userSchema)
};
