
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Movies extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    Year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {

    const {id, title, Year, poster } = this.props

    return (
      <Link to={`/detail/${id}`} href={`?id=${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={poster}
              alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}


