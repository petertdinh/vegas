import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';

class Tabs extends Component {
	render() {
		return (
			<Tabs>
			  <Tab label="DESCRIPTION">
			    <div>
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

}

export default connect(mapStateToProps)(Tabs);