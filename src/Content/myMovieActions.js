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
  return fetch("https://movi-lib.herokuapp.com/api/v1/movies", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export function updateMovie(data) {
  var requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  };
  fetch("https://movi-lib.herokuapp.com/api/v1/movies/{{movie_id}}", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export function deleteMovie() {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  fetch("https://movi-lib.herokuapp.com/api/v1/movies//{{movie_id}}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
class getAllMovies extends Component {

}

export default getAllMovies;