import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentHotel, onTabChange } from '../actions/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import './styles/current_hotel_tabs.css';

class CurrentHotelTabs extends Component {
	constructor(props) {
		super(props);
		this.state = { moreDescription: false, moreDetails: false };
	}

	toggleMoreOrLess = (tab) => {
		if(this.state[tab]) {
			this.setState({[tab]: false});
		} else {
			this.setState({[tab]: true});
		}
	}

	toggleDescription = () => {
		this.toggleMoreOrLess('moreDescription');
	}

	toggleDetail = () => {
		this.toggleMoreOrLess('moreDetails');
	}

	onTabChange = (value) => {
		this.props.onTabChange(value);
		this.setState({moreDescription: false, moreDetails: false});
	}

	render() {
		const description = this.props.description.split('\r\n\r\n').map((paragraph, index) => {
			return <p className="desc-paragraph" key={index}>{paragraph}</p>
		});

		const details = this.props.details.map((detail, index) => {
			return (
				<div key={index} className="detail">
					<div><strong>{detail.label}:</strong></div>
					<div>{detail.value}</div>
				</div>
			)
		});
		
		return (
			<Tabs className="tabs" onChange={this.onTabChange} value={this.props.activeTab}>
			  <Tab label="DESCRIPTION" value={0}>
			    <div className="desc-tag" style={this.state.moreDescription ? {height: '100%'} : {height: 200, overflow: 'hidden'}}>
			    	{description}
			    </div>
			    <div className="toggle" onClick={() => {
			    	this.toggleDescription();
			    }}>
			    	{this.state.moreDescription ? `HIDE FULL DESCRIPTION` : `SHOW FULL DESCRIPTION`}
			    </div>
			  </Tab>
			  <Tab label="DETAILS" value={1}>
			  	<div className="details-tag" style={this.state.moreDetails ? {height: '100%'} : {height: 200, overflow: 'hidden'}}>
			  		{details}
			  	</div>
			  	<div className="toggle" onClick={() => {
			  		this.toggleDetail();
			  	}}>
			  		{this.state.moreDetails ? `VIEW LESS DETAILS` : `VIEW MORE DETAILS`}
			  	</div>
			  </Tab>
			  <Tab label="LOCATION" value={2}>
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
	const { description, details, location, activeTab } = state.currentHotel;
	return {
		description,
		details,
		location,
		activeTab
	};
};

export default connect(mapStateToProps, { fetchCurrentHotel, onTabChange })(CurrentHotelTabs);