import React, { Component } from 'react';
import AppContainer from '../containers/AppContainer';

class App extends Component {
  render() {
    return(
      <AppContainer>
        OK
        {this.props.children}
      </AppContainer>
    )
  }
}

export default App;
