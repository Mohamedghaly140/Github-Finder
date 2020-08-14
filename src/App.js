import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import About from './Components/Pages/About';
import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/user/:login" component={User} />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
