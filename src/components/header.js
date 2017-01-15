import React, { Component } from 'react';
import { fetchVenetian } from '../actions/index';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

class Header extends Component {
	componentDidMount() {
		this.props.fetchVenetian();
	}

	render() {
		return (
			<div className="header">
				<img src={"http://localhost:8888/assets/images/venetian.jpg"} />
				<div>
					<h1>{this.props.name}</h1>
					<StarRatingComponent
						editing={false}
						starCount={5}
						value={5} />
					<p>{`Strip ${this.props.phoneNumber} Best Price Guarantee`}</p>
				</div>
				<div>
					<p>{`$${this.props.price}`}</p>
					<p>Hotel Rooms From</p>
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