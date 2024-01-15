import {
	Footer,
	Possibility,
	Features,
	WhatGPT3,
	Header,
} from '../../containers';
import { CTA } from '../../components';
import React from 'react';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
