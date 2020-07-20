import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onChangeHandler = event => {
    this.setState({ text: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
