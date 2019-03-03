import React from 'react';
import ReactDOM from 'react-dom';
import CoffeeshopList from './components/CoffeeshopList.jsx';
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

  componentDidMount() {
  }

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
      <div>
        <div className='test'>i want coffee</div>
        <Search search={this.search}/>
        <CoffeeshopList locations={this.state.locations}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));