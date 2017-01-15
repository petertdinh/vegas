import React, { Component } from 'react';
import Header from './header';
import VenetianTabs from './venetian_tabs';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
        <VenetianTabs />
      </div>
    );
  }
}

export default App;
