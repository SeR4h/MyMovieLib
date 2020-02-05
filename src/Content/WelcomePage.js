import React, { Component } from 'react'
import './Main.css';

class WelcomePage extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    MyMovieLib<a href="/Login" type="submit" class="buttons btnStyle" >Log In</a>
                </div>
                <div className="navbar">
                    <a className="tablink" href="/" >Home</a>
                    <a class="tablink active " href="/WelcomePage" >All Movies</a>
                    <a class="tablink" href="/addMovie" >Add Movie</a>
                    <div className="dropdown">
                        <button className="dropbtn">MyAccount</button>
                        <div className="dropdown-content">
                            <a class="tablink" href="/WelcomePage">Profile</a>
                            <a class="tablink" href="/WelcomePage">Change Password</a>
                        </div>
                    </div>
                </div>
                <div id="allmovies" className="tabcontent">
                    <h2>Movie List</h2>
                    <hr />
                    <a href="/" className="rows">
                        <div class="columns" style={{ backgroundColor: '#aaa' }}>
                            <h2>Movie 1</h2>
                            <p>Movie Description..</p>
                        </div></a>
                    <a href="/" className="rows">
                        <div class="columns" style={{ backgroundColor: '#bbb' }}>
                            <h2>Movie 2</h2>
                            <p>Movie Description..</p>
                        </div>  </a>
                </div>
            </div>

        )
    }
}

export default WelcomePage;
