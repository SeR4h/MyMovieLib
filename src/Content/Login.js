/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Main.css';
class Login extends Component {
    render() {
        return (
            <form class="lgnfrm">
                <h1 style={{ textAlign: 'center' }}>MyMovieLib</h1>
                <div style={{ padding: '16px' }}>
                    <div> <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required /></div>
                    <div>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                    </div>
                    <div>
                        <label>Remember me</label>
                        <input type="checkbox" checked="checked" name="remember" />
                        <span className="psw"><a href="#" className="btn">Forgot password?</a></span>

                    </div>
                    <br />

                    <div className="container col">
                        <a style={{ width: 'auto', marginRight: '2%' }} class="buttons" href="/welcomePage">Login</a>

                        <a type="button" href="/" class="cancelbtn buttons">Cancel</a>

                    </div></div>
            </form>

        )
    }
}

export default Login;
