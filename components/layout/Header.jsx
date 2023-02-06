import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNavbar from './MobileNav';

export const Header = () => {

	const {pathname} = useRouter()

	const [isOpen, setIsOpen] = useState(false);

	const isMobileMenuOpenHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<nav className='relative flex flex-row justify-between items-center w-full py-6 px-4 lg:px-[4.5rem] max-w-screen-2xl mx-auto'>
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
			<div className='hidden lg:flex justify-center items-center'>
				<Link href='/' className={`${pathname === '/' ? "nav_items_active" : "nav_items"}`}>Home</Link>
				<Link href='#about' className={`${pathname === '#about' ? "nav_items_active" : "nav_items"}`}>About</Link>
				<Link href='#process' className={`${pathname === '#process' ? "nav_items_active" : "nav_items"}`}>Process</Link>
				<Link href='#work' className={`${pathname === '#work' ? "nav_items_active" : "nav_items"}`}>Work</Link>
				<button className={`border-[0.09rem] border-[#E4E6D9] rounded-[6.25rem] py-3 px-6  text-[#8BA889] text-base font-semibold ml-3 hover:shadow-lg hover:bg-[#49654E] hover:text-[#ECEDE8]`}>Get in touch</button>
			</div>
			<div className="block lg:hidden">
				{isOpen ?
					<button type="button" onClick={() => setIsOpen(false)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3 5.71C18.2075 5.6173 18.0976 5.54375 17.9766 5.49357C17.8556 5.44339 17.7259 5.41756 17.595 5.41756C17.464 5.41756 17.3343 5.44339 17.2134 5.49357C17.0924 5.54375 16.9825 5.6173 16.89 5.71L12 10.59L7.10998 5.7C7.0174 5.60742 6.90749 5.53398 6.78652 5.48388C6.66556 5.43377 6.53591 5.40798 6.40498 5.40798C6.27405 5.40798 6.1444 5.43377 6.02344 5.48388C5.90247 5.53398 5.79256 5.60742 5.69998 5.7C5.6074 5.79258 5.53396 5.90249 5.48385 6.02346C5.43375 6.14442 5.40796 6.27407 5.40796 6.405C5.40796 6.53593 5.43375 6.66558 5.48385 6.78655C5.53396 6.90751 5.6074 7.01742 5.69998 7.11L10.59 12L5.69998 16.89C5.6074 16.9826 5.53396 17.0925 5.48385 17.2135C5.43375 17.3344 5.40796 17.4641 5.40796 17.595C5.40796 17.7259 5.43375 17.8556 5.48385 17.9765C5.53396 18.0975 5.6074 18.2074 5.69998 18.3C5.79256 18.3926 5.90247 18.466 6.02344 18.5161C6.1444 18.5662 6.27405 18.592 6.40498 18.592C6.53591 18.592 6.66556 18.5662 6.78652 18.5161C6.90749 18.466 7.0174 18.3926 7.10998 18.3L12 13.41L16.89 18.3C16.9826 18.3926 17.0925 18.466 17.2134 18.5161C17.3344 18.5662 17.464 18.592 17.595 18.592C17.7259 18.592 17.8556 18.5662 17.9765 18.5161C18.0975 18.466 18.2074 18.3926 18.3 18.3C18.3926 18.2074 18.466 18.0975 18.5161 17.9765C18.5662 17.8556 18.592 17.7259 18.592 17.595C18.592 17.4641 18.5662 17.3344 18.5161 17.2135C18.466 17.0925 18.3926 16.9826 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" fill="#49654E"/>
						</svg>
					</button>
					:
					<button type="button" onClick={() => setIsOpen(true)}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" fill="#49654E"/>
						</svg>
					</button>
				}
				{isOpen && <MobileNavbar setIsOpen={setIsOpen}/>}
			</div>
		</nav>
	);
};