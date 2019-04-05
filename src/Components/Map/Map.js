/*global google*/

import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'

class Map extends React.Component {
    constructor(props){
        super(props)
      }
    render() {
        const DirectionsComponent = compose(
          withProps({
            stops: this.props.stops,
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
                origin: new google.maps.LatLng(41.8507300, -87.6512600),
                destination: new google.maps.LatLng(41.8525800, -87.6514100),
                waypoints: this.props.stops,
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
            <DirectionsComponent
            />
        )
      }
    }
    export default Map