import React from "react"
import "./Searchbar.css"

export default class Searchbar extends React.Component {
    render() {
        const { search, handleFormSubmit } = this.props

        return (
            <form className="search">
                <div className = "searchContainer">
                <div className="form-group">
                <input className = "input"
                    placeholder="Search a band, city, or venue..."
                     ref={input => this.search = input}
                     onChange={this.handleInputChange}
                    />
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-success">Search</button>
                </div>
                </div>
            </form>
        )
    }
}
