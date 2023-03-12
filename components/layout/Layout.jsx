import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<main className="flex flex-col justify-start items-center w-screen min-h-screen">
			<Header />
			{children}
			<Footer />
		</main>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
