import React from 'react';
import Link from 'next/link';

function MobileNavbar() {
	return (
		<div className="absolute z-10 left-0 top-20 bg-[#F9F8F4] flex lg:hidden flex-col items-start justify-start w-full space-y-12 py-6 px-8 text-md font-bold shadow-xl bg-white duration-200">
			<Link href="/" className="nav_items" scroll={false}>
				Home
			</Link>
			<Link href="#about" className="nav_items" scroll={false}>
				About
			</Link>
			<Link href="#process" className="nav_items" scroll={false}>
				Process
			</Link>
			<Link href="#work" className="nav_items" scroll={false}>
				Works
			</Link>
			<a
				href="mailto:aololade862@gmail.com?subject=Let's work together!"
				className="border-[0.09rem] border-[#E4E6D9] w-full rounded-[6.25rem] py-3 px-6  text-[#8BA889] text-base text-center font-semibold"
			>
				Get in touch
			</a>
		</div>
	);
}

export default MobileNavbar;
