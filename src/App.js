import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Components/Layout/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ECRET}`
      )
      .then(response => {
        this.setState({ users: response.data, loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
