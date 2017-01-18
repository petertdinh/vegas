import React, { Component } from 'react';
import { fetchCurrentHotel, forceLocationTab } from '../actions/index';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import './styles/hotel_info.css';

class HotelInfo extends Component {
	componentDidMount() {
		this.props.fetchCurrentHotel();
	}
	
	render() {
		return (
			<div className="hotel-info">
				<div className="main">
					<div>
						<div className="hotel-name">
							{this.props.name.toUpperCase()}
						</div>
							<StarRatingComponent
								name="rating"
								editing={false}
								starCount={this.props.starRating}
								value={5} />
					</div>
					<div className="info">
						<div className="marker" onClick={() => this.props.forceLocationTab()}>
							<img src={`http://image.flaticon.com/icons/svg/33/33622.svg`}
									 height={15}
									 width={15}
									 alt="click-for-location" />
							<div>Strip</div>
						</div>
						<div className="phone">
							<img className="phone-icon"
									 src={`http://localhost:8888/assets/images/phone.png`} 
									 height={15} 
									 width={15} 
									 alt="phone-number" />
							<div>{`$${this.props.phoneNumber}`}</div>
						</div>
						<div className="best-price">
							<img className="thumbs-up"
									 src={`http://localhost:8888/assets/images/thumbs-up.png`} 
									 height={15}
									 width={15} 
									 alt="thumbs-up" />
							<div> Best Price Guarantee</div>
						</div>
					</div>
				</div>
				<div className="price-info">
					<div className="price">{`$${this.props.price}`}</div>
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