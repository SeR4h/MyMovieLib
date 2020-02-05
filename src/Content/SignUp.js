import React, { Component } from 'react'
import './Main.css';

class SignUp extends Component {
  render() {
    return (

      <form action="/WelcomePage" className="sgnfrm" >
        <div>  <h2>Sign Up Form</h2>
          <h4>Dont have an account? Please fill in the form</h4>
          <hr />
          <label for="name"><b>UserName:</b></label><br />
          <input type="text" placeholder="Enter User name" name="Username" required />
          <br />
          <label for="email"><b>Email:</b></label><br />
          <input type="text" placeholder="Enter Email" name="email" required />
          <br />
          <label for="psw"><b>Password:</b></label><br />
          <input type="password" placeholder="Enter Password" name="psw" required /><br />

          <label for="psw-confirm"><b>Confirm Password:</b></label><br />
          <input type="password" placeholder="Confirm Password" name="psw-confirm" />

          <p>By creating an account you agree to our <a href="." style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>


          <a href="/" class="cancelbtn buttons">Cancel</a> <button type="submit" class="buttons" style={{ marginLeft: '30%' }}>Sign Up</button>
        </div>
      </form>

    )
  }
}
export default SignUp;