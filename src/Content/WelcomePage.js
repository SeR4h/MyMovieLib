/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Main.css';

const fetch = require('node-fetch')
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var message = 'Click on image to see movie details';
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
    alert(message);
  }

  render() {
    const { data } = this.state;
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
        <div id="allmovies" style={{ backgroundColor: '#ccc' }}  >
          <h2>Movie List</h2>
          <hr />
          {
            data.map((dat) => {
              return (
                <div className="row1">
                  <div className="column1">
                    <div className="contents">

                      <a href={`/movie/${dat._id}`}><img src={dat.imageUrl} style={{ width: '100%', height: '100%' }} /></a>
                      <h3> {dat.title}</h3>
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
