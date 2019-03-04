import React from 'react';
import ReactDOM from 'react-dom';
import BobashopList from './components/BobashopList.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
    this.search = this.search.bind(this);
  };
  
  search(query) {
    axios.get('/search', {
      params: {query}
    } )
    .then(res => {
      this.setState({
        locations: res.data.businesses
      })
      console.log(this.state.locations);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='title'>i want boba</div>
        <Search search={this.search}/>
        <BobashopList locations={this.state.locations}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));