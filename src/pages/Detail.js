import React , {Component} from 'react'
import PropTypes from 'prop-types'
import { App } from '../App'
import { ButtonBackToHome } from '../Components/ButtonBackToHome'


const API_KEY = '9cb0d80c'

export class Detail extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = {
    movie: {}
  }

  _fetchMovie({id}){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(resp => resp.json())
      .then(movie => {
        console.log(movie)
        this.setState({
          movie
        })
      })
  }

  componentDidMount(){
    console.log(this.props)
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  render(){

    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return(
      <div>
        <ButtonBackToHome/>
        {/* <button type="submit" onClick={}>SUbmit</button> */}
        <h1>{Title}</h1>
        <img src={Poster}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
      </div>
    )
  }
}