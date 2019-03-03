import React from 'react';

class Search extends React.Component{
  constructor() {
    super();
    this.state = {
      search: ''
    };
  };

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor='search'></label>
          <input 
            id='search' 
            type='search'
            placeholder='Search by city (eg. Austin)' 
            value={this.state.search} 
            onChange={this.handleChange.bind(this)}
          ></input>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;