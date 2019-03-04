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

  componentDidMount() {
    this.setState({
      locations: [{
        "rating": 4,
        "price": "$",
        "phone": "+14152520800",
        "id": "E8RJkjfdcwgtyoPMjQ_Olg",
        "alias": "four-barrel-coffee-san-francisco",
        "is_closed": false,
        "categories": [
          {
            "alias": "coffee",
            "title": "Coffee & Tea"
          }
        ],
        "review_count": 1738,
        "name": "Four Barrel Coffee",
        "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
        "coordinates": {
          "latitude": 37.7670169511878,
          "longitude": -122.42184275
        },
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
        "location": {
          "city": "San Francisco",
          "country": "US",
          "address2": "",
          "address3": "",
          "state": "CA",
          "address1": "375 Valencia St",
          "zip_code": "94103"
        },
        "distance": 1604.23,
        "transactions": ["pickup", "delivery"]
      }]
    })
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
      <div className='wrapper'>
        <div className='title'>i want boba</div>
        <Search search={this.search}/>
        <BobashopList locations={this.state.locations}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));