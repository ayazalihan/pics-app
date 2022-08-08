import React from "react";

class SearchBar extends React.Component {
  // Controlled Component Example!!!
  state = { term: "" };

  // arrow function and the keyword 'this'
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // Controlled Component Example!!!
              value={this.state.term}
              // Controlled Component Example!!!
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
