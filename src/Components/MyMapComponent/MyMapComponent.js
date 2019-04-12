/*global google*/
import Map from "../Map/Map"
import API from "../../utils/API";
import Searchbar from "../Searchbar/Searchbar"
import SearchForm from "../SearchForm/SearchForm";
import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import moment from "moment";

class MyMapComponent extends React.Component {
    state = {
        events: [],
        search: "",
        breeds: [],
        results: [],
        error: "",
        origin: "",
        lat: "",
        lng: ""
      };
       
    componentDidMount() {
      var ven = [];
      var bands = ["Cradle of filth", "Deafheaven", "Mastodon", "Ellie Goulding", "Sinmara", "Vanum", "Architects",
      "After the Burial", "Amigo the Devil", "Bell Witch", "Anberlin", "Behemoth", "Fallujah", "Uada", "Fit for an Autopsy",
      "Tristen", "Wormwitch", "The Acacia Strain", "Knocked Loose"
      ];

      for (var i=0; i < bands.length; i++) {
        API.getVenues(bands[i])
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          //console.log(res);
          for (var i=0; i < res.data.length; i++) {
            ven.push({
              artist: res.data[i].lineup[0],
              datetime: moment(res.data[i].datetime).format("YYYY-MM-DD"),
              longitude: res.data[i].venue.longitude,
              latitude: res.data[i].venue.latitude,
              location: res.data[i].venue.name + ", " + res.data[i].venue.city
            });
          };
        })
        .catch(err => this.setState({ error: err.message }));
      };
      this.setState( {events: ven});
    }
    
    handleInputChange = event => {
      event.preventDefault();
      this.setState({ search: event.target.value });
    };    

    handleFormSubmit = event => {
      console.log(this.state.events);
      event.preventDefault();
      API.getCoord(this.state.search)
        .then(res => {
          console.log(res.data.results[0].geometry.location.lng);
          this.setState( {lng: res.data.results[0].geometry.location.lng, lat: res.data.results[0].geometry.location.lat})
        }).then(res => {
        
        var venues = [];
        //var currentLat = 41.49932;
        //var currentLng = -81.6943605;
        var currentLat = this.state.lat;
        var currentLng = this.state.lng;

        var timeNow = Date.now() + 86400000;
        var ven = this.state.events;
        var shows = [];

        for (var k=timeNow; k < timeNow + 1728000000; k = k + 86400000) {
          for (var j=0; j < ven.length; j++) {
            //if (ven[j].datetime === moment(k).format("YYYY-MM-DD")) {
            //if (ven[j].datetime === moment(k).format("YYYY-MM-DD") && (parseFloat(ven[j].longitude) >= (parseFloat(currentLng - 2.5)) && parseFloat(ven[j].longitude) <= (parseFloat(currentLng + 2.5))) && (parseFloat(ven[j].latitude) >= (parseFloat(currentLat - 2.5)) && parseFloat(ven[j].latitude) <= (parseFloat(currentLat + 2.5)))) {
            if (ven[j].datetime === moment(k).format("YYYY-MM-DD") && (parseFloat(ven[j].longitude) >= (parseFloat(currentLng - 2.5)) && parseFloat(ven[j].longitude) <= (parseFloat(currentLng + 2.5)))) {
              currentLat = parseFloat(ven[j].latitude);
              currentLng = parseFloat(ven[j].longitude);
              shows.push(ven[j]);
              venues.push({location: ven[j].location});
              break;
            }
          }
        }
        console.log(shows);
        this.setState({results: venues}); // route venues sent to make map
      });
    }

    // constructor(props){
    // super(props)
    // }
    render() {
        
    return (
        <div>
        <SearchForm 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          // venues={this.state.venues}
          breeds={this.state.breeds}
        />
        <Map
          origin={this.state.search}
          stops={this.state.results}
        />
        </div>
        )
    }
}
export default MyMapComponent
