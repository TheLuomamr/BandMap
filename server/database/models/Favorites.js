const mongoose = require("mongoose");
const { Schema } = mongoose;

const favoriteSchema = new Schema({
    createdOn: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Band'
    },
    band: {
        type: Schema.Types.ObjectId,
        ref: 'Band'
    }
});

module.exports = function(connection) {
    return connection.model("Favorite", favoriteSchema);
};
