/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Main.css';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <form className="lgnfrm">
                <h1 className="centerAlign">MyMovieLib</h1>
                <div className="formPad">
                    <div> <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required /></div>
                    <div>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                    </div>
                    <div>
                        <label>Remember me</label>
                        <input type="checkbox" name="remember" />
                        <span className="psw"><Link to="#" className="btn">Forgot password?</Link></span>

                    </div>
                    <br />

                    <div className="container col">
                        <Link className="buttons " to="/welcomePage">Login</Link>
                        <Link type="button" to="/" className="btnMargin cancelbtn buttons">Cancel</Link>

                    </div></div>
            </form>

        )
    }
}

export default Login;
