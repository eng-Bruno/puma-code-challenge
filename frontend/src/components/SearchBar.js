import React from "react";

class SearchBar extends React.Component {
  state = { username: "" };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Adicionar usuário</label>
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
