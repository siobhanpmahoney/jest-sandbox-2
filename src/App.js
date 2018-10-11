import React from 'react';
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: true
    }
  }

  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Jest Sandbox</h1>


      <div id="page-wrapper" className={this.state.toggle ? "day" : "night" }>
          <button className="switch" onClick={this.onToggle}>Switch</button>
        </div>

      </div>
      )
  }
}

export default App;
