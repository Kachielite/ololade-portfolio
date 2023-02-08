import React from 'react';
import Ololade from '../../public/images/ololade.png';
import Image from 'next/image';

const Home = () => {
	return (
		<main className='w-full flex flex-col justify-start items-start font-sora'>
			<section id='hero' className='w-full max-w-screen-xl mx-auto'>
				<div className='w-full flex flex-col justify-start items-start px-4 md:px-0 pt-[4.5rem] pb-16'>
					<h2 className='mb-6 brand-color font-bold text-[5rem]'>Hi there!</h2>
					<h1 className='mb-9 text-[#49654E] font-bold text-[4rem]'>I am Ololade Adesuyi,</h1>
					<p className='mb-10 font-normal text-4xl text-[#253528] leading-[3rem] md:w-[69rem]'>A UI/UX Designer with a
						strategic and creative mindset, dedicated to delivering high-quality, impactful
						solutions that meet the needs of my clients and their customers no matter the industry.</p>
					<div className='flex flex-row justify-center items-center space-x-6'>
						<button
							className={`bg-[#49654E] rounded-[6.25rem] py-[1.4rem] px-12  text-white text-xl font-normal hover:shadow-lg  hover:scale-110 duration-300`}>Get
							in touch
						</button>
						<p className='flex flex-row justify-center items-center text-[#8BA889] font-normal text-xl'>
							or find out more
							<span className='ml-2.5'>
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
			<section className='w-full bg-[#253528]' id='about'>
				<div className='w-full flex flex-col md:flex-row justify-between items-start px-4 md:px-0 py-24 max-w-screen-xl mx-auto'>
					<div className='flex flex-col justify-start items-start md:w-[45.8rem]'>
						<p className='font-normal text-base text-white mb-2'>A bit</p>
						<h2 className='font-bold text-white text-[2.5rem] mb-6'>About Me</h2>
						<div className='flex flex-col justify-start items-start space-y-6 mb-6'>
							<p className='font-light text-2xl text-white leading-[2.5rem]'>As a designer, I aim to <span
								className='font-bold'>solve users' challenges</span> and <span className='font-bold'>convert them into loyal customers</span>.
								This is why I’m
								constantly exploring new ways products can connect with people and I gather inspiration and innovative
								ideas while at it.</p>
							<p className='font-light text-2xl text-white leading-[2.5rem]'>I have more than 2 years of experience &
								this experience and knowledge has been trusted by <a href='https://tappi.app'
																																		 className='underline underline-offset-2'>Tappi</a>,
								<a href='https://www.phareztech.com/' className='underline underline-offset-2'> Phareztech</a>, <a
									href='https://ajua.com' className='underline underline-offset-2'> Ajua</a>, <a
									href='https://engauge.ng/' className='underline underline-offset-4'> Mtn EnGauge</a>, and more.</p>
							<p className='font-light text-2xl text-white leading-[2.5rem]'>And when I’m not designing? You’ll find me
								volunteering at <a href='https://www.instagram.com/oguntechies/'
																	 className='underline underline-offset-4'>OgunTechies</a> & <a
									href='https://genleaders.org/about-us' className='underline underline-offset-4'>GenLeaders</a>. If you
								can't find
								me at any of these places, I'm either playing music, bingeing Netflix, or obsessing over anything
								design.</p>
						</div>
						<button
							className={`flex flex-row  border-[0.09rem] border-[#C0CFB2]  rounded-[6.25rem] py-[1.4rem] px-12  text-[#ECEDE8] text-base font-normal  hover:shadow-lg  hover:scale-110 duration-300`}>
								Read My Resume
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2.5'>
								<path d="M5 12H19" stroke="#ECEDE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12 5L19 12L12 19" stroke="#ECEDE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</button>
					</div>
					<div className='w-[28.8rem] h-[41.1rem] mt-10 md:mt-0'>
						<Image src={Ololade} alt="Ololade's pic" className="w-[28.8rem] h-[41.1rem]" />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;