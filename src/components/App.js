import React, { Component } from 'react';
import ImageAndHotelLists from './image_and_hotel_lists';
import InfoAndTabs from './info_and_tabs';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageAndHotelLists />
        <InfoAndTabs />
      </div>
    )
  }
}

export default App;