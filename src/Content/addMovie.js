import React, { Component } from 'react'
import './Main.css';
import { PostMovie } from './myMovieActions';
const initialState = {
    title: '',
    director: '',
    description: '',
    genre: '',
    releaseDate: '',
    trailer: '',
    imageUrl: ''
}
class addMovie extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        const text = {
            title: this.state.title,
            description: this.state.description,
            genre: this.state.genre,
            imageUrl: this.state.imageurl,
            trailer: this.state.trailer,
            director: this.state.director,
            releaseDate: this.state.releaseDate,
            operation: "insert"
        }
        PostMovie(text);
    }

    render() {
        return (
            <div>
                <div className="header">
                    MyMovieLib<a href="/" type="submit" class="buttons btnStyle" >Sign Out</a>
                </div>
                <div className="navbar">
                    <a className="tablink" href="/" >Home</a>
                    <a class="tablink " href="/WelcomePage" >All Movies</a>
                    <a class="tablink active " href="/addMovie" >Add Movie</a>
                    <div className="dropdown">
                        <button className="dropbtn">MyAccount</button>
                        <div className="dropdown-content">
                            <a class="tablink" href="/WelcomePage">Profile</a>
                            <a class="tablink" href="/WelcomePage">Change Password</a>
                        </div>
                    </div>
                </div>
                <div className="tabcontent movief">
                    <form style={{ border: '1px solid #ccc' }} onSubmit={this.handleSubmit}>
                        <h3 className="row">Add movie of your choice</h3>
                        <hr />
                        <div className="row">
                            <div className="col-25"><label for="title">Movie Title:</label></div>
                            <div className="col-75"><input type="text" placeholder="Enter Movie Title" name="title" value={this.state.title} onChange={this.handleChange} required /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"> <label for="description">Description:</label></div>
                            <div className="col-75"><textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Write something.." style={{ height: '200px' }} required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label for="genre">Genre:</label></div>
                            <div className="col-75">
                                <select id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} >
                                    <option value="action">Action</option>
                                    <option value="horror">Horror</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="adventure">Adventure</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25"> <label for="releaseDate">Release Date:</label></div>
                            <div className="col-75"><input type="date" id="releaseDate" name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} required /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label for="director">Director:</label></div>
                            <div className="col-75"><input type="text" id="director" name="director" value={this.state.director} onChange={this.handleChange} required /></div>
                        </div>

                        <h2 className="row">Optional Fields</h2>
                        <hr />
                        <div className="row">
                            <div className="col-25"><label for="Trailer"> Trailer:</label></div>
                            <div className="col-75"><input type="file" id="trailer" name="trailer" value={this.state.trailer} onChange={this.handleChange} /></div>
                        </div>
                        <div className="row">
                            <div className="col-25"><label for="imageUrl"> ImageURL</label></div>
                            <div className="col-75"><input type="url" id="imageUrl" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} /></div>
                        </div>
                        <div className="row">
                            <input type="submit" value="ADD" />
                        </div>
                        <div>
                        </div>
                    </form></div></div>

        )
    }
}
export default addMovie;