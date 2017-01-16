import React, { Component } from 'react';
import Header from './header';
import HotelsList from './hotels_list';
import CurrentHotelTabs from './current_hotel_tabs';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      		<Header />
      	<div className="body">
	      	<HotelsList />
	        <CurrentHotelTabs />
        </div>
      </div>
    );
  }
}

export default App;
