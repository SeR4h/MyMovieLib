import React from 'react'
import './Main.css';
import { updateMovie } from './myMovieActions';
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
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        const text = {
            title: this.state.movieData.title,
            description: this.state.movieData.description,
            genre: this.state.movieData.genre,
            imageUrl: this.state.movieData.imageurl,
            trailer: this.state.movieData.trailer,
            director: this.state.movieData.director,
            releaseDate: this.state.movieData.releaseDate,
            operation: "insert"
        }
        updateMovie(text);
    }
    render() {
        return (

            <div>
                <div className="header">
                    MyMovieLib<a href="/" type="submit" class="buttons btnStyle" >Sign Out</a>
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

                <h2>Edit ({this.state.movieData.title})</h2>
                <hr />
                <form onSubmit={this.handleSubmit} className="editData">
                    <div className="row">
                        <div className="col-25"> <label for="title">Title:</label></div>
                        <div className="col-75"><input type="text" id="title" name="title" value={this.state.movieData.title} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="Director">Director:</label></div>
                        <div className="col-75"><input type="text" id="director" name="director" value={this.state.movieData.director} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="genre">Genre:</label></div>
                        <div className="col-75"><input type="text" id="genre" name="genre" value={this.state.movieData.genre} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="description">Description:</label></div>
                        <div><textarea id="description" name="description" value={this.state.movieData.description} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="releaseDate">Release Date:</label></div>
                        <div className="col-75"><input type="text" id="releaseDate" name="releaseDate" value={this.state.movieData.releaseDate} onChange={this.handleChange} required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="trailer">Trailer:</label></div>
                        <div className="col-75"><input type="text" id="trailer" name="trailer" value={this.state.movieData.trailer} onChange={this.handleChange} /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="imageUrl">Image Url:</label></div>
                        <div className="col-75"><input type="text" id="imageUrl" name="imageUrl" value={this.state.movieData.imageUrl} onChange={this.handleChange} /></div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Save" />
                    </div>
                    <div className="row">
                        <a href={`/movie/${this.state.movieData._id}`} className="cancelbtn">Back</a>
                    </div>
                </form></div>


        );
    }

}
export default movie;

