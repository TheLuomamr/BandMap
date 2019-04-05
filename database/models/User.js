const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({

    username:{
        type: String,
        require: true,
        description: 'Username'
    },
    email:{
        type: String,
        required: true,
        match: [/.+@\..+/, "Please enter valid email address."],
        description: "User Email"
    },
    password:{
        type: String,
        require: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    }

});
const User = mongoose.model("User", userSchema);

module.exports = User;
