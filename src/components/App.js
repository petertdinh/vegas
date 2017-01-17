import React, { Component } from 'react';
import ImageAndHotelsList from './image_and_hotels_list';
import InfoAndTabs from './info_and_tabs';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageAndHotelsList />
        <InfoAndTabs />
      </div>
    )
  }
}

export default App;