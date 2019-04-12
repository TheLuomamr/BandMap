import { compose, lifecycle } from "recompose";
import queryString from "query-string"
export default function(Component) {
    console.log('WithBandsCalled')
    return compose(
        lifecycle({
            componentDidMount() {
                console.log('componentDidMount')
                let parsed = queryString.parse(window.location.search);
                let accessToken = parsed.access_token;
                console.log(accessToken)
                if (!accessToken)
                    return;
                fetch('https://api.spotify.com/v1/me/following?type=artist', {
                    headers: {'Authorization': 'Bearer ' + accessToken}
                }).then(response => response.json())
                .then(bands => {
                    this.setState({ bands })
                })
            }
        })
    )(Component)
}