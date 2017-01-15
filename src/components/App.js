import React, { Component } from 'react';
import Header from './header';
import HotelsList from './hotels_list';
import VenetianTabs from './venetian_tabs';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<HotelsList />
        <VenetianTabs />
      </div>
    );
  }
}

export default App;
