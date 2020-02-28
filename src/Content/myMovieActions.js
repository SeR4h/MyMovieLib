import { Component } from 'react'

const fetch = require('node-fetch')

export function PostMovie(data) {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  console.log(JSON.stringify(data))
  return fetch("https://movi-lib.herokuapp.com/api/v1/movies", requestOptions)
    .then(response => response.json())
    .then(() => {
      alert("Movie successfully added")
      window.location.href = "/WelcomePage"
    })
    .catch((error) => {
      console.log('error', error)
      alert("Couldnot add movie,Check if you filled all compulsory fields and try again")
    });

}

export function updateMovie(data, id) {
  var requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  };
  fetch(`https://movi-lib.herokuapp.com/api/v1/movies/${id}`, requestOptions)
    .then(response => response.json())
    .then((result) => {
      console.log(result);
      alert("Movie successfully updated")
      window.location.href = `/movie/${id}`
    })
    .catch((error) => {
      console.log('error', error)
      alert("Something went wrong!!Please try again")
    });
}

export function deleteMovie(id) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  fetch(`https://movi-lib.herokuapp.com/api/v1/movies/${id}`, requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      alert("Movie Deleted")
      window.location.href = "/WelcomePage"
    })
    .catch((error) => {
      console.log('error', error)
    });

}
class getAllMovies extends Component {

}

export default getAllMovies;