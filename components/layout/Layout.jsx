import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
	return (
		<main className="flex flex-col justify-between items-center w-screen min-h-screen">
				<Header/>
				<Footer/>
		</main>
	);
};