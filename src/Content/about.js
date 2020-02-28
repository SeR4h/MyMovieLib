import React, { Component } from 'react'
import './Main.css';
import { Link } from 'react-router-dom'
class About extends Component {
    render() {
        return (

            <div id="about" className="tabcontent">
                <div className="header">
                    MyMovieLib <Link to="/Signup" className="buttons btnStyle">Sign up</Link>
                </div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/WelcomePage" >All Movies</Link>
                    <Link to="/addMovie">Add Movie</Link>
                    <Link to="/about" className="floatRight active" >About</Link>

                </div>
                <div className="about-section">
                    <h1>About MyMovieLib</h1>
                    <p>My Movie Library is an online library where users can freely add their favorite movies and view allof them at a glance.</p>
                    <p>Users can perform the following tasks:</p>
                    <ol><li>Users can create a movie</li>
                        <li> Users can view all the movies in the library</li>
                        <li> Users can view a single movie in the library</li>
                        <li> Users can modify a movie in the library</li>
                        <li>Users can delete a specific movie in the library</li>
                    </ol>
                </div>
                <h2 className="centerAlign">Owned by:</h2>
                <div className="about-section">
                    <div >
                        <h2 >Nakyembe Sarah</h2>
                        <p>Role: Developer</p>
                        <p>A fresh enthusiastic developer happy to take on any challenges</p>
                        <p>Email: sarahalezandor@gmail.com</p>
                    </div>
                </div>
                <h2 className="centerAlign">Sponsored by:</h2>
                <div className="about-section">
                    <div >
                        <h2 >Andela Uganda</h2>
                        <p>The Andela Women In Tech SuperWoman Program</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;