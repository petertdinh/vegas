import React, { Component } from 'react';
import { fetchCurrentHotel, forceLocationTab } from '../actions/index';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import icons from './icons';
import './styles/fonts.css';
import './styles/hotel_info.css';

class HotelInfo extends Component {
	componentDidMount() {
		this.props.fetchCurrentHotel();
	}
	
	render() {
		return (
			<div className="hotel-info">
				<div className="main">
					<div className="name-stars">
						<div className="hotel-name">
							{this.props.name.toUpperCase()}
						</div>
							<StarRatingComponent
								className="rating"
								name="rating"
								editing={false}
								starCount={this.props.starRating}
								starColor={'#9999A3'}
								value={5} />
					</div>
					<div className="info">
						<div className="marker" onClick={() => this.props.forceLocationTab()}>
							{icons.mark}
							<div>Strip</div>
						</div>
						<div className="phone">
							{icons.phone}
							<div>{`$${this.props.phoneNumber}`}</div>
						</div>
						<div className="best-price">
							{icons.like}
							<div>Best Price Guarantee</div>
						</div>
					</div>
				</div>
				<div className="price-info">
					<div className="price"><strong>{`$${this.props.price}`}</strong></div>
					<div>Hotel Rooms From</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, price, phoneNumber, starRating } = state.currentHotel;
	return {
		name,
		price,
		phoneNumber,
		starRating
	};
};

export default connect(mapStateToProps, { fetchCurrentHotel, forceLocationTab })(HotelInfo);