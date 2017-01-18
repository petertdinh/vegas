import React, { Component } from 'react';
import ImageAndHotelsList from './image_and_hotels_list';
import InfoAndTabs from './info_and_tabs';
import './styles/App.css';

class App extends Component {
  render() {
    return (
    	<div>
      	<div className="header">
      		<img className="all-hotels"
      				 src={`http://localhost:8888/assets/images/left.png`}
      				 alt="SEE ALL LAS VEGAS HOTELS" />
      		SEE ALL LAS VEGAS HOTELS
      	</div>
	      <div className="App">
	        <ImageAndHotelsList />
	        <InfoAndTabs />
	      </div>
      </div>
    )
  }
}

export default App;