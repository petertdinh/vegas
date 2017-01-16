import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentHotel } from '../actions/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import './styles/current_hotel_tabs.css';

class CurrentHotelTabs extends Component {

	render() {
		const description = this.props.description.split('\r\n\r\n').map((paragraph, index) => {
			return <div key={index}>{paragraph}</div>
		});

		return (
			<Tabs className="tabs">
			  <Tab label="DESCRIPTION">
			    <div>
			    	{description}
			    </div>
			  </Tab>
			  <Tab label="DETAILS">
			  	sup
			  </Tab>
			  <Tab label="LOCATION">
			  </Tab>
			</Tabs>
		)
	}
}

const mapStateToProps = (state) => {
	const { description, details, location } = state.currentHotel;
	return {
		description,
		details,
		location
	};
};

export default connect(mapStateToProps, { fetchCurrentHotel })(CurrentHotelTabs);