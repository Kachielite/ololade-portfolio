import React from 'react';
import { Header } from './Header';
export const Layout = () => {
	return (
		<main className="flex flex-col justify-start items-center w-screen min-h-screen">
			<Header/>
		</main>
	);
};