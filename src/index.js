import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import Hero from './Hero';
import Commercial from './Commercial';
import Share from './Share';
import Footer from './Footer';
import MenuResponsive from './MenuResponsive';
import './index.css';

import { BrowserRouter as Router, Route } from "react-router-dom";


import registerServiceWorker from './registerServiceWorker';

const LandingPage = () => (
	<div className="sm-contents">
		<div className='hero-section'><Hero /></div>
		<div className='commercial-section'><Commercial /></div>
		<div className='share-section'><Share /></div>
	</div>
);

const AboutPage = () => (
	<div className="sm-content" style={{ height: '100rem', width: '100%',paddingTop: '110px' }}>Hola a todos</div>
);

const TopicsPage = () => (
	<div className="sm-contents">
		<div className='hero-section'><Hero /></div>
		<div className='share-section'><Share /></div>
	</div>
);

const Main = () => (
<Router>
	<div className="main-section">

			<div className='menu-mobile-section'><MenuResponsive /></div>
			<div className='menu-section'><Menu /></div>
			<div className="content-section">
				<Route exact path="/" component={LandingPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/topics" component={TopicsPage} />
			</div>
			<div className='footer-section'><Footer /></div>
	</div>
</Router>
);


ReactDOM.render(<Main />, document.getElementById('main'));


registerServiceWorker();
