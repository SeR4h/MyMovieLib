import React from 'react'
import './Main.css';
import { updateMovie } from './myMovieActions';
import { Link } from 'react-router-dom'
const fetch = require('node-fetch')

class movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.singleMovie(id);
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
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ movieData: { ...this.state.movieData, [name]: value } });

        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { _id, ...newData } = this.state.movieData
        console.log(newData);
        updateMovie(newData, this.props.match.params.id);

    }
    render() {
        const { title, director, genre, description, releaseDate, trailer, imageUrl } = this.state.movieData;
        return (

            <div className="margin">
                <div className="header">
                    MyMovieLib
                </div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/WelcomePage" className="active">All Movies</Link>
                    <Link to="/addMovie">Add Movie</Link>
                    <Link to="/about" className="floatRight" >About</Link>
                </div>

                <h2>Edit ({this.state.movieData.title})</h2>
                <hr />
                <form onSubmit={this.handleSubmit} className="editData">
                    <div className="row">
                        <div className="col-25"> <label htmlFor="title">Title:</label></div>
                        <div className="col-75"><input type="text" id="title" name="title" value={title} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="Director">Director:</label></div>
                        <div className="col-75"><input type="text" id="director" name="director" value={director} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="genre">Genre:</label></div>
                        <div className="col-75">
                            <select id="genre" name="genre" value={genre} onChange={this.handleChange} >
                                <option value="action">{genre}</option>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="thriller">Thriller</option>
                                <option value="adventure">Adventure</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="description">Description:</label></div>
                        <div><textarea id="description" name="description" value={description} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="releaseDate">Release Date:</label></div>
                        <div className="col-75"><input type="text" id="releaseDate" name="releaseDate" value={releaseDate} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="trailer">Trailer:</label></div>
                        <div className="col-75"><input type="text" id="trailer" name="trailer" value={trailer} onChange={this.handleChange} /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label htmlFor="imageUrl">Image Url:</label></div>
                        <div className="col-75"><input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={this.handleChange} /></div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Save" />
                    </div>
                    <div className="row">
                        <Link to={`/movie/${this.props.match.params.id}`} className="cancelbtn">Back</Link>
                    </div>
                </form></div>


        );
    }

}
export default movie;

