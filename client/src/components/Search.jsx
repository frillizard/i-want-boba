import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  };

  handleChange(e) {
    this.setState({
      query: e.target.value
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
            value={this.state.query} 
            onChange={this.handleChange.bind(this)}
          ></input>
          <button 
            type='button'
            onClick={() => this.props.search(this.state.query)}
          >Search</button>
        </form>
      </div>
    )
  }
}

export default Search;