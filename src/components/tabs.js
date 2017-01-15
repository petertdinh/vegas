import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

class VenetianTabs extends Component {
	render() {
		return (
			<Tabs>
			  <Tab label="DESCRIPTION">
			    <div>
			    	{this.props.description}
			    </div>
			  </Tab>
			  <Tab label="DETAILS">
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

export default connect(mapStateToProps)(VenetianTabs);