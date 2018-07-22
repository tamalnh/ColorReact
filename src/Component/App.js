import React, {Component} from 'react';
import Colors from './Colors/Colors';
class App extends Component {

  constructor (props) {
    super(props)

    this.colors = ['green', 'red', 'yellow', 'gray']

  }
  render(){
    
    return(
      <div className="app">
      <h2> Click to see name of color </h2>
        <Colors colors={this.colors} />
      </div>
    )
  }
}

export default App;