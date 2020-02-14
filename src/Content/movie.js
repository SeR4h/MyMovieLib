import React from 'react'
import './Main.css';

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
  componentDidMount() {
    const id = this.props.match.params.id
    this.singleMovie(id);
  }
  render() {
    return (

      <div>
        <div className="header">
          MyMovieLib<a href="/Login" type="submit" class="buttons btnStyle" >Log In</a>
        </div>
        <div className="navbar">
          <a className="tablink" href="/" >Home</a>
          <a className="tablink active " href="/WelcomePage" >All Movies</a>
          <a className="tablink" href="/addMovie" >Add Movie</a>
          <div className="dropdown">
            <button className="dropbtn">MyAccount</button>
            <div className="dropdown-content">
              <a className="tablink" href="/WelcomePage">Profile</a>
              <a className="tablink" href="/WelcomePage">Change Password</a>
            </div>
          </div>
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
            <a href={`/edit/${this.state.movieData._id}`} className="btns" > EDIT</a>

          </div>
        </div></div>


    );
  }

}
export default movie;

