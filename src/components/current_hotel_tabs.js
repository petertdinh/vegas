import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentHotel } from '../actions/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import './styles/current_hotel_tabs.css';

class CurrentHotelTabs extends Component {
	constructor(props) {
		super(props);
		this.state = { more: false };
	}

	handleMoreOrLessClick = () => {
		if(this.state.more) {
			console.log('sup');
			this.setState({more: false});
		} else {
			this.setState({more: true});
		}
	}

	render() {
		const description = this.props.description.split('\r\n\r\n').map((paragraph, index) => {
			return <div className="desc-paragraph" key={index}>{paragraph}</div>
		});

		const details = this.props.details.map((detail, index) => {
			return (
				<div key={index} className="detail">
					<div><strong>{detail.label}:</strong></div>
					<div>{detail.value}</div>
				</div>
			)
		});

		const tabsStyle = {
			contentContainerStyle: {
				width: '90%',
				margin: 'auto'
			},
			tabItemContainerStyle: {
				width: '90%',
				margin: 'auto'
			}
		};

		return (
			<Tabs className="tabs" {...tabsStyle}>
			  <Tab label="DESCRIPTION">
			    <div className="desc-tag" style={this.state.more ? {height: '100%'} : {height: 200, overflow: 'hidden'}}>
			    	{description}
			    </div>
			    <div onClick={() => {
			    	this.handleMoreOrLessClick();
			    }}>
			    	SHOW FULL DESCRIPTION
			    </div>
			  </Tab>
			  <Tab label="DETAILS">
			  	{details}
			  </Tab>
			  <Tab label="LOCATION">
			  	<div>
				  	<img src={`http://image.flaticon.com/icons/svg/33/33622.svg`}
				  			 height={25}
				  			 width={25}
				  			 alt="map-marker" />
				  	{this.props.location}
			  	</div>
			  	<img src={`http://localhost:8888/assets/images/map_venetian.png`}
			  			 height={'70%'}
			  			 width={'70%'}
			  			 alt="hotel" />
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