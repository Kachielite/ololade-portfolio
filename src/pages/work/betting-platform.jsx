import React from 'react';
import Image from 'next/image';
import Footer from '../../../components/layout/Footer';
import bettingPlatformFooter from '../../../public/images/bettingPlatform/betting-footer.png';
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

			<section className="w-full max-w-screen-xl mx-auto py-12 lg:pt-36 px-4 flex justify-center items-center">
				<Image
					src={bettingPlatformFooter}
					alt="bettingPlatformFooter"
					className="lg:w-[63.13rem] lg:h-[18.18rem]"
				/>
			</section>
			<Footer />
		</main>
	);
}

export default BettingPlatform;
