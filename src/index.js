import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';

import SignUp from './Content/SignUp';
import about from './Content/about';
import login from './Content/Login';
import welcome from './Content/WelcomePage';
import addMovie from './Content/addMovie';
import movie from './Content/movie';
import edit from './Content/edit';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/about" component={about} />
      <Route path="/Login" component={login} />
      <Route path="/WelcomePage" component={welcome} />
      <Route path="/addMovie" component={addMovie} />
      <Route path="/movie/:id" component={movie} />
      <Route path="/edit/:id" component={edit} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
