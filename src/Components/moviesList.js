
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movies } from './movie'

export class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props

    return (
      <div className="MoviesList">
        {
          movies.map(movie => {
            return (
              <div key={movie.imdbID} className="MoviesList-item">
                <Movies
                  title={movie.Title}
                  Year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                />
              </div>
            )
          })

        }

      </div>
    )

  }
}

