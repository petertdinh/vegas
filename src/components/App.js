import React, { Component } from 'react';
import Header from './header';
import HotelsList from './hotels_list';
import VenetianTabs from './venetian_tabs';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      		<Header />
      	<div className="footer">
	      	<HotelsList />
	        <VenetianTabs />
        </div>
      </div>
    );
  }
}

export default App;
