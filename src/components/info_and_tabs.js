import React, { Component } from 'react';
import HotelInfo from './hotel_info';
import CurrentHotelTabs from './current_hotel_tabs';

export default class InfoAndTabs extends Component {
	render() {
		return (
			<div className="info-tabs">
				<HotelInfo />
				<CurrentHotelTabs />
			</div>
		)
	}
}