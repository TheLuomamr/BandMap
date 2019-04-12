import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getVenues: function(breed) {
    return axios.get("https://rest.bandsintown.com/artists/" + breed + "/events?app_id=1ce0c08494c94ed2388f7a9cf0a89afc");
    //return axios.get("https://rest.bandsintown.com/artists/cradle%20of%20filth/events?app_id=1ce0c08494c94ed2388f7a9cf0a89afc");
  },

  getCoord: function(city) {
    return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=AIzaSyBnYQSBwhAq7HKVX5bjFXtsOFsOXLiTSfI");
  }
};

