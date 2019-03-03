import React from 'react';
import ReactDOM from 'react-dom';
import Coffee from './components/Coffee.jsx';
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
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Coffee />
        <Search search={this.search}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));