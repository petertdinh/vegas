import React from 'react';
import './styles/fonts.css';
import './styles/header.css';

const Header = () => (
	<div className="header">
		<img className="all-hotels"
				 src={`http://localhost:8888/assets/images/left.png`}
				 alt="SEE ALL LAS VEGAS HOTELS" />
		SEE ALL LAS VEGAS HOTELS
	</div>
);

export default Header;