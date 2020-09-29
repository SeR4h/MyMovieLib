import React from 'react'
import './Main.css';
import { deleteMovie } from './myMovieActions';
import { Link } from 'react-router-dom'
const fetch = require('node-fetch')

class movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: {}
    }
  }

  singleMovie = (id) => {
    const url = `https://movi-lib.herokuapp.com/api/v1/movies/${id}`;
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => this.setState({ movieData: result.data }))
      .catch(error => console.log('error', error));

  }
  handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this movie?')) {
      deleteMovie(id);
    }

  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.singleMovie(id);
  }
  render() {

    return (

      <div>
        <div className="header">
          MyMovieLib
        </div>
        <div className="navbar">
          <Link to="/" >Home</Link>
          <Link to="/WelcomePage" className="active">All Movies</Link>
          <Link to="/addMovie">Add Movie</Link>
          <Link to="/about" className="floatRight" >About</Link>
        </div>

        <h2>{this.state.movieData.title}</h2>
        <hr />
        <div key={this.state.movieData._id} >
          <img className="movieimg" src={this.state.movieData.imageUrl} alt={this.state.movieData.title} />

          <div className="movie">
            <p>Genre: {this.state.movieData.genre}</p>
            <p>Director: {this.state.movieData.director}</p>
            <p>{this.state.movieData.description}</p>
            <p>Released On: {this.state.movieData.releaseDate}</p>
            <p>Find trailer:<a href={this.state.movieData.trailer}> {this.state.movieData.trailer}</a></p>
            <Link to={`/edit/${this.props.match.params.id}`} className="btns">EDIT</Link>

          </div>
        </div>
        <form onSubmit={e => this.handleDelete(e, this.state.movieData._id)}>
          <button type="submit" name="Delete" className="cancelbtn">Delete</button>
        </form>
      </div>


    )

  }

}
export default movie;

