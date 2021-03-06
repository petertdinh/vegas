import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHotels } from '../actions/index';
import './styles/fonts.css';
import './styles/image_and_hotels_list.css';

class ImageAndHotelsList extends Component {
	componentDidMount() {
		this.props.fetchHotels();
	}

	render() {
		const list = this.props.hotels.map(hotel => (
				<div className="list-item" key={hotel.code}>
					<div className="list-name">{hotel.name}</div>
					<div className="list-price">{`$${hotel.price % 1 === 0 ? `${hotel.price}.00`: hotel.price}`}</div>
				</div>
		));

		return (
			<div className="image-and-hotel-lists">
				<img className="image"
						 src={`http://localhost:8888/assets/images/venetian.jpg`}
						 height={180}
						 width={250}
						 alt="hotel" />
				<div className="hotels-list">
					{list}
				</div>
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

export default connect(mapStateToProps, { fetchHotels })(ImageAndHotelsList);