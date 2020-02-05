import React, { Component } from 'react'
import './Main.css';

class addMovie extends Component {
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
                <div className="tabcontent movief"><form style={{ border: '1px solid #ccc' }}>
                    <h3 className="row">Add movie of your choice</h3>
                    <hr />
                    <div className="row">
                        <div className="col-25"><label for="movietitle">Movie Title:</label></div>
                        <div className="col-75"><input type="text" placeholder="Enter Movie Title" name="movietitle" required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="description">Description:</label></div>
                        <div className="col-75"><textarea id="description" name="description" placeholder="Write something.." style={{ height: '200px' }} required></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label for="genre">Genre:</label></div>
                        <div className="col-75">
                            <select id="genre" name="genre" >
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="thriller">Thriller</option>
                                <option value="adventure">Adventure</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"> <label for="releasedate">Release Date:</label></div>
                        <div className="col-75"><input type="date" id="releasedate" name="releasedate" required /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label for="director">Director:</label></div>
                        <div className="col-75"><input type="text" id="director" name="director" required /></div>
                    </div>

                    <h2 className="row">Optional Fields</h2>
                    <hr />
                    <div className="row">
                        <div className="col-25"><label for="Trailer"> Trailer:</label></div>
                        <div className="col-75"><input type="file" id="trailer" name="trailer" /></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label for="imageUrl"> ImageURL</label></div>
                        <div className="col-75"><input type="url" id="imageurl" name="imageurl" /></div>
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