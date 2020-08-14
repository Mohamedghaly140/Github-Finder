import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import About from './Components/Pages/About';
import GithubState from './Context/github/GithubState';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  // Get user repos
  const getUserRepos = username => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        // console.log(response.data);
        setRepos(response.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setLoading(false);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search setAlert={showAlert} />
                  <Users />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
