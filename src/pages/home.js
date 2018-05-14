
import React, {Component} from 'react'

import { Title } from '../Components/title'
import { SearchForm } from '../Components/SearchForm'
import { MovieList } from '../Components/moviesList'

export class Home extends Component {

  state = {
    results: [],
    usedSearch: false
  }


  _handleResults = (results) => {
    this.setState({
      results,
      usedSearch: true
    })
  }

  _renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! <span>😔</span>  Results not found!</p>
      : <MovieList movies={this.state.results} />

  }

  render(){
    return(
      <div>
        <Title>Search Movies</Title>
        <div className="Search-form-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
    )
  }
}

