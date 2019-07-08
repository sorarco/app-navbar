import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>App1</h3>
        </header>
      </div>
    );
  }
}

export default App;
