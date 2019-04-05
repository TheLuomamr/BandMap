const mongoose = require("mongoose");
const { Schema } = mongoose;

const favoriteRouteSchema = new Schema({



});

const FavoriteRoutes = mongoose.model("FavoriteRoutes", favoriteRouteSchema);

module.exports = FavoriteRoutes;
