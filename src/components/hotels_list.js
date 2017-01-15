import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHotels } from '../actions/index';
import './styles/hotels_list.css';

class HotelsList extends Component {
	componentDidMount() {
		this.props.fetchHotels();
	}

	render() {
		const list = this.props.hotels.map(hotel => (
				<div className="list-item" key={hotel.code}>
					<div className="list-name">{hotel.name}</div>
					<div className="list-price">{`$${hotel.price}`}</div>
				</div>
		));

		return (
			<div className="hotels-list">
				{list}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { hotels } = state.hotels;
	return {
		hotels
	};
};

export default connect(mapStateToProps, { fetchHotels })(HotelsList);