import {
	Footer,
	Possibility,
	Features,
	WhatGPT3,
	Header,
} from '../../containers';
import { CTA, Navbar } from '../../components';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Footer />
		</div>
	);
};

export default Home;
