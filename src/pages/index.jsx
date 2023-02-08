import React from 'react';

const Home = () => {
	return (
		<main className='w-full max-w-screen-2xl mx-auto flex flex-col justify-start items-start font-sora'>
			<section id='hero' className='w-full'>
				<div className='w-full flex flex-col justify-start items-start px-4 md:px-[7.5rem] pt-[4.5rem] pb-16'>
					<h2 className='mb-6 brand-color font-bold text-[5rem]'>Hi there!</h2>
					<h1 className='mb-9 text-[#49654E] font-bold text-[4rem]'>I am Ololade Adesuyi,</h1>
					<p className='mb-10 font-normal text-4xl text-[#253528] leading-[3rem] md:w-[69rem]'>A UI/UX Designer with a
						strategic and creative mindset, dedicated to delivering high-quality, impactful
						solutions that meet the needs of my clients and their customers no matter the industry.</p>
					<div className='flex flex-row justify-center items-center space-x-6'>
						<button
							className={`bg-[#49654E] rounded-[6.25rem] py-[1.4rem] px-12  text-white text-xl font-normal ml-3 hover:shadow-lg  hover:scale-110 duration-300`}>Get
							in touch
						</button>
						<p className="flex flex-row justify-center items-center text-[#8BA889] font-normal text-xl">
							or find out more
							<span className="ml-2.5">
								<svg width='24' height='25' viewBox='0 0 24 25' fill='none'
										 xmlns='http://www.w3.org/2000/svg'>
										<path d='M7 13.125L12 18.125L17 13.125' stroke='#8BA889' stroke-width='2' stroke-linecap='round'
													stroke-linejoin='round' />
										<path d='M7 6.125L12 11.125L17 6.125' stroke='#8BA889' stroke-width='2' stroke-linecap='round'
													stroke-linejoin='round' />
								</svg>
							</span>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;