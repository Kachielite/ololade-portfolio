import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {

	const {pathname} = useRouter()


	return (
		<nav className='flex flex-row justify-between items-center w-full py-6 px-[4.5rem] max-w-screen-2xl mx-auto'>
			<Link href='/'>
				<div className='flex justify-center items-center space-x-4'>
					<svg width='56' height='28' viewBox='0 0 56 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<g clip-path='url(#clip0_828_102)'>
							<path
								d='M22.0296 14.2605C22.0296 18.0594 18.9206 21.1604 15.059 21.1604C11.1974 21.1604 8.08838 18.0594 8.08838 14.2605C8.08838 10.4615 11.1974 7.36045 15.059 7.36045C18.9206 7.36045 22.0296 10.4615 22.0296 14.2605Z'
								stroke='url(#paint0_linear_828_102)' stroke-width='3' />
							<path fill-rule='evenodd' clip-rule='evenodd'
										d='M30.4441 27.9709L17.4119 28L17.435 27.9757C16.5155 28.1624 15.5635 28.2604 14.5884 28.2604C6.79139 28.2604 0.470703 21.9924 0.470703 14.2604C0.470703 6.52846 6.79139 0.260449 14.5884 0.260449C21.7315 0.260449 27.6356 5.52136 28.5755 12.3491L36.0159 0.0522652L39.5798 0.288955L25.3687 24.4478L28.9215 24.4478L41.3562 3.05716L55.8211 27.9709L45.4165 27.9709L39.5798 18.4081L41.8638 15.6399L46.9392 24.4479H50.2382L41.3562 9.6002L30.4441 27.9709ZM25.706 14.2604C25.706 20.312 20.7522 25.2604 14.5884 25.2604C8.42453 25.2604 3.4707 20.312 3.4707 14.2604C3.4707 8.20894 8.42453 3.26045 14.5884 3.26045C20.7522 3.26045 25.706 8.20894 25.706 14.2604Z'
										fill='url(#paint1_linear_828_102)' />
						</g>
						<defs>
							<linearGradient id='paint0_linear_828_102' x1='6.58838' y1='14.2605' x2='23.5296' y2='14.2605'
															gradientUnits='userSpaceOnUse'>
								<stop stop-color='#B1812E' />
								<stop offset='1' stop-color='#E7DE9C' />
							</linearGradient>
							<linearGradient id='paint1_linear_828_102' x1='0.470703' y1='14.1564' x2='55.8211' y2='14.1564'
															gradientUnits='userSpaceOnUse'>
								<stop stop-color='#B1812E' />
								<stop offset='1' stop-color='#49654E' />
							</linearGradient>
							<clipPath id='clip0_828_102'>
								<rect width='56' height='28' fill='white' />
							</clipPath>
						</defs>
					</svg>
					<p className='text-[#8BA889] text-lg font-normal'>OLOLADE ADESUYI</p>
				</div>
			</Link>
			<div className='flex justify-center items-center space-x-[3.1rem]'>
				<Link href='/' className={`${pathname === '/' ? "nav_items_active" : "nav_items"}`}>Home</Link>
				<Link href='#about' className={`${pathname === '#about' ? "nav_items_active" : "nav_items"}`}>About</Link>
				<Link href='#process' className={`${pathname === '#process' ? "nav_items_active" : "nav_items"}`}>Process</Link>
				<Link href='#work' className={`${pathname === '#work' ? "nav_items_active" : "nav_items"}`}>Work</Link>
				<button className={`border-[0.09rem] border-[#E4E6D9] rounded-[6.25rem] py-3 px-6  text-[#8BA889] text-base font-semibold`}>Get in touch</button>
			</div>
		</nav>
	);
};