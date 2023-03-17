import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/layout/Footer';
import mtnEngaugeFooter from '../../../public/images/mtn-enguage-footer.png';
import preview from '../../../public/images/bettingPlatform/bettingImage.png';

function BettingPlatform() {
	return (
		<main className="w-full flex flex-col justify-start items-start font-satoshi bg-[#253528] overflow-x-hidden">
			<section
				id="hero"
				className="w-full max-w-screen-xl mx-auto px-4 lg:px-20"
			>
				<Image
					src={preview}
					alt="unionBankFooter"
					className="lg:pt-[3.2rem] pt-8"
				/>
			</section>

			<Link
				href="/work/mtn-engauge"
				className="w-full max-w-screen-xl mx-auto py-12 lg:pt-36 px-4 flex justify-center items-center"
			>
				<Image
					src={mtnEngaugeFooter}
					alt="Link to Mtn Engauge"
					className="lg:w-[63.13rem] lg:h-[18.18rem]"
				/>
			</Link>
			<Footer />
		</main>
	);
}

export default BettingPlatform;
