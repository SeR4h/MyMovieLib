/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Main.css';
import './Main.css';
import { Link } from 'react-router-dom'

const fetch = require('node-fetch')
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch("https://movi-lib.herokuapp.com/api/v1/movies", requestOptions)
      .then(response => response.json())
      .then(result => this.setState({ data: result.data }))
      .catch(error => console.log('error', error));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="header">
          MyMovieLib
        </div>
        <div className="navbar">
          <Link to="/" >Home</Link>
          <Link to="/WelcomePage" className="active">All Movies</Link>
          <Link to="/addMovie" >Add Movie</Link>
          <Link to="/about" className="floatRight" >About</Link>
        </div>
        <div id="allmovies" className="movieSection margin"  >
          <h2>Movie List</h2>
          <hr />
          {
            data.map((dat) => {
              return (
                <div className="row1" key={dat._id}>
                  <div className="column1">
                    <div className="contents">

                      <Link to={`/movie/${dat._id}`}><img src={dat.imageUrl} />
                        <h3> {dat.title}</h3></Link>
                      <p>{dat.genre}</p>
                    </div>
                    <hr /></div>
                </div>
              )
            })
          }

        </div>
      </div>

    )
  }
}


export default WelcomePage;
