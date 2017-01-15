import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src={"http://localhost:8888/assets/images/venetian"} />
				<h1>{this.props.name}</h1>
				<p>{`Strip ${this.props.phone} Best Price Guarantee`}</p>
				<span>
					<p>{this.props.price}</p>
					<p>Hotel Rooms From</p>
				</span>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { name, price, phone } = state;
	return {
		name,
		price,
		phone
	};
};

export default connect(mapStateToProps)(Header);