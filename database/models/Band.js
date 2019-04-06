const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema ({
    name: {
        type: String,
        require: true,
        description: "Band name"
    },
    genre: {
        type: String, 
        require: true,
        description: "Genre of music"
    },
    touring: {
        type: Boolean,
        default: true,
        description: "Is band on tour?"
    },
    tourDates: {
        type: String,
        type: Date,
        default: Date.now // needs to change to dates of tour?
    }
});

const Band = mongoose.model("Band", bandSchema);

module.exprts = Band;