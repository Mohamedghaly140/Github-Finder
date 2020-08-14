import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import User from './Components/Users/User';
// Context API
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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
