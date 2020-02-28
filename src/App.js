import React, { Component } from 'react'
import './Content/Main.css';
import { Link } from 'react-router-dom'
import img from './Content/images/1.jpg';
import img1 from './Content/images/it.jpg';
import img2 from './Content/images/Supergirl.jpg';
import img3 from './Content/images/7.jpg';
import img5 from './Content/images/Incredibles.jpg';
import img6 from './Content/images/6.png';
import img4 from './Content/images/FastFurious.jpg';
import img7 from './Content/images/spider.jpg';


const pics = [
    img,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
]

class App extends Component {
    constructor(props) {
        super(props);
        const idxStart = 0;
        this.state = {
            index: idxStart,
            next: this.getNextIndex(idxStart),
        };
    }
    getNextIndex(idx) {
        if (idx >= pics.length - 1) {
            return 0;
        }
        return idx + 1;
    }
    setIndexes(idx) {
        this.setState({
            index: idx,
            next: this.getNextIndex(idx)
        });
    }
    componentDidMount() {
        setInterval(() => {
            setTimeout(() => {
                this.setIndexes(this.getNextIndex(this.state.index));
            }, 500);
        }, 2000);
    }
    render() {

        return (
            <div>
                <div className="header">
                    MyMovieLib<Link to="/Signup" className="buttons btnStyle">Sign up</Link>
                </div>
                <div className="navbar">
                    <Link to="/" className="active">Home</Link>
                    <Link to="/WelcomePage" >All Movies</Link>
                    <Link to="/addMovie" >Add Movie</Link>
                    <Link to="/about" className="floatRight" >About</Link>


                </div>
                <div className={`slideshow-container`}>
                    <img src={pics[this.state.index]} alt="" /> </div>
            </div>


        )
    }
}

export default App;
