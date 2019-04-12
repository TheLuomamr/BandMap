/*global google*/
//import MapResults from "../MapResults/MapResults"
import API from "../../utils/API";
import withBands from "../../hocs/withBands"
import Searchbar from "../Searchbar/Searchbar"
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'

class MyMapComponent extends React.Component {
    state = {
        search: "",
        venues: [],
        results: [],
        error: ""
      };

    // componentDidMount() {
    //     API.getBaseBreedsList()
    //       .then(res => this.setState({ breeds: res.data.message }))
    //       .catch(err => console.log(err));
    //   }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.getVenues(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            console.log(res);
            // var venues = [];
            // for (var i=0; i < 10; i++) {
            //     var newcity = {}
            //     newcity.location = res[i].venue.name + ", " + res[i].venue.city
            //     venues.push(newcity);
            // };
            // console.log(venues);
            
            //this.setState({ results: res.data.message, error: "" });
            this.setState({ results: res.data[0].venue.name + ", " + res.data[0].venue.city, error: "" });
            console.log(this.state.results);
          })
          .catch(err => this.setState({ error: err.message }));
       
      };






    // constructor(props){
    // super(props)
    // }
    render() {
        const DirectionsComponent = compose(
        withProps({
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBnYQSBwhAq7HKVX5bjFXtsOFsOXLiTSfI",
            loadingElement: <div style={{ height: `400px` }} />,
            containerElement: <div style={{ width: `100%` }} />,
            mapElement: <div style={{height: `600px`, width: `600px` }}  />,
        }),
        withScriptjs,
        withGoogleMap,
        lifecycle({
            componentDidMount() { 
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: new google.maps.LatLng(41.50, -81.69),
                destination: new google.maps.LatLng(41.8525800, -87.6514100),
                // put array of objects as locations
                waypoints: [{location: 'Mr. Smalls, PA', stopover: true}, {location: "St. Andrews Hall, MI"}],
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                    directions: {...result},
                    markers: true
                })
                } else {
                console.error(`error fetching directions ${result}`);
                }
            });
            }
        })
        )(props =>
        <GoogleMap
            defaultZoom={3}
        >
            {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
        </GoogleMap>
        );
        
    return (
            <div>
            {/* <MapResults results={this.state.results} /> */}
            <DirectionsComponent />
            <Searchbar 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                venues={this.state.venues}
            />
            
            </div>
        )
    }
}
export default withBands(MyMapComponent)
