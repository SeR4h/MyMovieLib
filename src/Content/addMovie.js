import React, { Component } from 'react'
import './Main.css';
import { PostMovie } from './myMovieActions';
import { Link } from 'react-router-dom'

class addMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '',
            description: '',
            genre: '',
            releaseDate: '',
            trailer: '',
            imageUrl: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        var text = {
            title: this.state.title,
            description: this.state.description,
            genre: this.state.genre,
            imageUrl: this.state.imageurl,
            trailer: this.state.trailer,
            director: this.state.director,
            releaseDate: this.state.releaseDate
        }
        console.log(text);
        PostMovie(text);
    }

    render() {
        const { title, director, genre, description, releaseDate, trailer, imageUrl } = this.state;
        return (
            <div>
                <div className="header">
                    MyMovieLib
                </div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/WelcomePage">All Movies</Link>
                    <Link to="/addMovie" className="active">Add Movie</Link>
                    <Link to="/about" className="floatRight" >About</Link>
                </div>
                <div className="tabcontent movief">
                    <form onSubmit={this.handleSubmit} >
                        <h3 className="row">Add movie of your choice</h3>
                        <hr />
                        <div className="row">
                            <div className="col-25"><label htmlFor="title">Movie Title:</label></div>
                            <div className="col-75"><input type="text" placeholder="Enter Movie Title" name="title" value={title} onChange={this.handleChange} required /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"> <label htmlFor="description">Description:</label></div>
                            <div className="col-75"><textarea id="description" name="description" value={description} onChange={this.handleChange} placeholder="Write something.." style={{ height: '200px' }} required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label htmlFor="genre">Genre:</label></div>
                            <div className="col-75">
                                <select id="genre" name="genre" value={genre} onChange={this.handleChange} >
                                    <option value="">Choose genre....</option>
                                    <option value="action">Action</option>
                                    <option value="horror">Horror</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="adventure">Adventure</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25"> <label htmlFor="releaseDate">Release Date:</label></div>
                            <div className="col-75"><input type="date" id="releaseDate" name="releaseDate" value={releaseDate} onChange={this.handleChange} required /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label htmlFor="director">Director:</label></div>
                            <div className="col-75"><input type="text" id="director" name="director" value={director} onChange={this.handleChange} required /></div>
                        </div>

                        <h2 className="row">Optional Fields</h2>
                        <hr />
                        <div className="row">
                            <div className="col-25"><label htmlFor="Trailer"> Trailer:</label></div>
                            <div className="col-75"><input type="file" id="trailer" name="trailer" value={trailer} onChange={this.handleChange} /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label htmlFor="imageUrl"> ImageURL</label></div>
                            <div className="col-75"><input type="url" id="imageUrl" name="imageUrl" value={imageUrl} onChange={this.handleChange} /></div>
                        </div>
                        <div className="row">
                            <input type="submit" value="ADD" id="col-25" />
                        </div>
                        <div>
                        </div>
                    </form>
                </div></div>

        )
    }
}
export default addMovie;
