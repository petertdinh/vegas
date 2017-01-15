import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenetian } from '../actions/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import './styles/venetian_tabs.css';

class VenetianTabs extends Component {
	componentDidMount() {
		this.props.fetchVenetian();
	}

	render() {
		return (
			<Tabs className="tabs">
			  <Tab label="DESCRIPTION">
			    <div>
			    	{this.props.description}
			    </div>
			  </Tab>
			  <Tab label="DETAILS">
			  	sup
			  </Tab>
			  <Tab label="LOCATION">
			  </Tab>
			</Tabs>
		)
	}
}

const mapStateToProps = (state) => {
	const { description, details, location } = state.venetian;
	return {
		description,
		details,
		location
	};
};

export default connect(mapStateToProps, { fetchVenetian })(VenetianTabs);