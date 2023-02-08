import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({children}) => {
	return (
		<main className="flex flex-col justify-start items-center w-screen min-h-screen scroll-smooth">
				<Header/>
				{children}
				<Footer/>
		</main>
	);
};