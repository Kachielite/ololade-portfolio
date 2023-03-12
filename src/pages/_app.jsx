import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
	/* eslint-disable react/jsx-props-no-spreading */
	return <Component {...pageProps} />;
}

App.propTypes = {
	Component: PropTypes.node.isRequired,
	pageProps: PropTypes.node.isRequired,
};
