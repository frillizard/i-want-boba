import React from 'react';
import ReactDOM from 'react-dom';
import Coffee from './components/Coffee.jsx';

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
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));