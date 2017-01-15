import React, { Component } from 'react';
import { fetchVenetian } from '../actions/index';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import './styles/header.css';

class Header extends Component {
	componentDidMount() {
		this.props.fetchVenetian();
	}

	render() {
		return (
			<div className="header">
				<div className="main">
					<img src={"http://localhost:8888/assets/images/venetian.jpg"}
							 height={180}
							 width={250}
							 alt="hotel" />
					<div className="hotel-info">
						<div className="hotel-name">
							{this.props.name}
						</div>
							<StarRatingComponent
								name="rating"
								editing={false}
								starCount={5}
								value={5} />
						<div>{`Strip ${this.props.phoneNumber} Best Price Guarantee`}</div>
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
	const { name, price, phoneNumber } = state.venetian;
	return {
		name,
		price,
		phoneNumber
	};
};

export default connect(mapStateToProps, { fetchVenetian })(Header);