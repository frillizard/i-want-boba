import React from 'react';
import ReactDOM from 'react-dom';
import Coffee from './components/Coffee.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  };

  render() {
    return (
      <div>
        <Coffee />
        <Search />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));