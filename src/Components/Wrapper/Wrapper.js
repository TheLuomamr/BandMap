import React from "react"
import PropTypes from "prop-types"
import "./Wrapper.css"

export default class Wrapper extends React.Component {
    render() {
        const { children } = this.props

        return (
            <main className="wrapper">{children}</main>
        )
    }
}

Wrapper.props = {
    children: PropTypes.node
}