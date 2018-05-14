
import React, { Component } from 'react'

const API_KEY = '9cb0d80c'

export class SearchForm extends Component {

  state = {
    valueInput: ''
  }

  _handleChange = (e) => {
    this.setState({
      valueInput: e.target.value
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { valueInput} = this.state

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&S=${valueInput}`)
      .then(resp => resp.json())
      .then(results => {
        const { Search = [], totalResults='0' }= results
        console.log(Search, totalResults)
        this.props.onResults(Search)
      })


  }


  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input onChange={this._handleChange} className="input" type="text" placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
          </button>
          </div>
        </div>
      </form>
    )
  }
}
