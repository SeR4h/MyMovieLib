import React, { Component } from 'react'
import './Main.css';
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (

      <form action="/WelcomePage" className="sgnfrm" >
        <div>  <h2>Sign Up Form</h2>
          <h4>Dont have an account? Please fill in the form</h4>
          <hr />
          <label htmlFor="name"><b>UserName:</b></label><br />
          <input type="text" placeholder="Enter User name" name="Username" required />
          <br />
          <label htmlFor="email"><b>Email:</b></label><br />
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />
          <label htmlFor="psw"><b>Password:</b></label><br />
          <input type="password" placeholder="Enter Password" name="psw" required /><br />

          <label htmlFor="psw-confirm"><b>Confirm Password:</b></label><br />
          <input type="password" placeholder="Confirm Password" name="psw-confirm" />

          <p>By creating an account you agree to our <Link to=".">Terms & Privacy</Link>.</p>

          <Link to="/" className="cancelbtn buttons">Cancel</Link> <button type="submit" className="buttons btnMargin" >Sign Up</button>
        </div>
      </form>

    )
  }
}
export default SignUp;