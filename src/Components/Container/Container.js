import React from "react"
import PropTypes from "prop-types"

export default class Container extends React.Component {
    render() {
        const { fluid, children } = this.props
        
        return (
           <body><div className={`container${fluid ? "-fluid" : ""}`}>{children}</div></body> 
        )
    }
}

Container.propTypes = {
    fluid: PropTypes.string,
    children: PropTypes.node
}