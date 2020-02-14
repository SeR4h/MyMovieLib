import React, { Component } from 'react'
import './Content/Main.css';

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
            move: false,
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
            this.setState({
                move: true
            });
            setTimeout(() => {
                this.setState({
                    move: false
                });
                this.setIndexes(this.getNextIndex(this.state.index));
            }, 500);
        }, 2000);
    }
    render() {
        const move = this.state.move ? 'move' : '';
        if (this.state.move) {

        }
        return (
            <div>
                <div className="header">
                    MyMovieLib<a href="/Signup" type="submit" class="buttons btnStyle" >Sign up</a>
                </div>
                <div className="navbar">
                    <a className="tablink active" href="/" >Home</a>
                    <a class="tablink " href="/WelcomePage" >All Movies</a>
                    <a class="tablink" href="/addMovie" >Add Movie</a>
                    <a className="tablink" href="/about" style={{ float: 'right' }}>About</a>

                </div>
                <div className={`slideshow-container ${move}`}>
                    <img src={pics[this.state.index]} alt="" style={{ width: "100%", height: "50%" }} /> </div>
            </div>


        )
    }
}

export default App;
