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

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.search(this.state.query);
    }
  }

  render() {
    return (
      <div className='search-container'>
        <form>
          <label htmlFor='search'></label>
          <input 
              id='search' 
              type='search'
              aria-label='search'
              placeholder='Search by city (eg. Austin)' 
              value={this.state.query} 
              onChange={this.handleChange.bind(this)}
              onKeyPress={(e) => this.handleKeyPress(e)}
          ></input>
          <button 
            type='button'
            onClick={() => this.props.search(this.state.query)}
            className='submit-button'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
      </div>
    )
  }
}

export default Search;