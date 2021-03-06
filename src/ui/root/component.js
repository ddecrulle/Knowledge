import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';
import Home from 'ui/components/pages/home';
import Service from 'ui/components/pages/service';
import TopBar from 'ui/components/shared/topbar';

AOS.init({ once: true });

const Root = () => {
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='services' element={<Service />} />
			</Routes>
		</Router>
	);
};

export default Root;
