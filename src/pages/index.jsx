import React, { useState } from 'react';
import Image from 'next/image';
import Ololade from '../../public/images/ololade.png';
import MtnEngauge from '../../public/images/mtnEngauge.png';
import UnionBannk from '../../public/images/unionBank.png';
import UTask from '../../public/images/utask.png';
import BettingPlatform from '../../public/images/betting-platform.png';
import Link from 'next/link';


const Home = () => {
	const design_process = [
		{
			id: 0,
			show: false,
			title: 'Strategize',
			subtitle: 'Understand & define the problem:',
			details: 'Before jumping into designs, I identify the product\'s objectives and audience. This includes conducting user research, competitive analysis, market analysis and exploring the solutions that already exist.',
		},
		{
			id: 1,
			show: false,
			title: 'Design',
			subtitle: 'Profer solution:',
			details: 'After we have identified a problem, I would then creatively orchestrate and produce visuals in sync with your brand and the product\'s main objective. This would also involve testing and iteration from potential users to see if the proposed solution actually meets their needs. At the end of this stage, you\'ll get pixel perfect designs so that your devs can take this further.',
		},
		{
			id: 2,
			show: false,
			title: 'Collaborate',
			subtitle: 'Bringing the designs to life:',
			details: 'I would work with your developers to make sure that the design gets implemented the way we envisioned it to work, and provides the experience we want.',
		},
		{
			id: 3,
			show: false,
			title: 'Gain feedback',
			subtitle: 'Iteration:',
			details: 'No design is perfect because design is an iterative process, and for that, we always have to keep going back to the user to learn and iterate. An ideal design process never ends, keeps on learning and keeps on improving over time.',
		},

	];

	const works = [
		{
			id: 1,
			image: MtnEngauge,
			title: 'Mtn EnGauge',
			text: 'A customer management platform that enables businesses find new customers and engage with them. On Mtn EnGauge, businesses can share promos/offers, survey their customers and get feedback from them, using their mobile phones. The MTN EnGauge mobile app is available on both the Google Play store and the Apple store.',
		},
		{
			id: 2,
			image: UnionBannk,
			title: 'Union Bank',
			text: 'The Union Bank mobile banking app design is a personal project aimed at improving the user experience for young adults. I followed a user-centered design approach, conducted extensive research, generated multiple design concepts and prototypes, conducted user testing, and created a final design based on the feedback. The design solution aimed to simplify the mobile banking experience, allow users to customize the app to their preferences, be visually appealing and modern, and meet the needs and preferences of the target audience.',
		},
		{
			id: 3,
			image: UTask,
			title: 'U-Task',
			text: 'A mobile app that connects service providers with customers in need of their services. The app has two distinct sides: one for service providers and one for consumers. The app also includes a landing page that provides information about the app and allows service providers to sign up',
		},
		{
			id: 4,
			image: BettingPlatform,
			title: 'Betting Platform',
			text: 'This is a platform that allows users to place bets on various sports events using cryptocurrency as a form of payment. The platform includes a web app designed to provide an intuitive and user-friendly experience for users. The goal of the UI/UX design project was to improve the user experience and increase user engagement and conversion rates on the mobile app. The design solution simplified navigation, improved visual hierarchy, and increased visual appeal, resulting in a successful improvement in user engagement and conversion rates, as well as positive feedback from users on the improved user experience.',
		},
	];
	const [selectedProcess, setSelectedProcess] = useState(design_process);

	const designProcessCardHandler = (id) => {
		let newProcessList = [...selectedProcess];
		newProcessList.filter(item => item.id !== id).map(item => item.show = false);
		newProcessList[id].show = !newProcessList[id].show;
		setSelectedProcess(newProcessList);
	};

	return (
		<main className='w-full flex flex-col justify-start items-start font-sora'>
			<section id='hero' className='w-full max-w-screen-xl mx-auto'>
				<div className='w-full flex flex-col justify-start items-start px-4 lg:px-[7.5rem] pt-[4.5rem] pb-16'>
					<h2 className='mb-6 brand-color font-bold text-[5rem]'>Hi there!</h2>
					<h1 className='mb-9 text-[#49654E] font-bold text-[4rem]'>I am Ololade Adesuyi,</h1>
					<p className='mb-10 font-normal text-4xl text-[#253528] leading-[3rem] lg:w-[69rem]'>A UI/UX Designer with a
						strategic and creative mindset, dedicated to delivering high-quality, impactful
						solutions that meet the needs of my clients and their customers no matter the industry.</p>
					<div className='flex flex-col md:flex-row justify-center items-center space-x-6'>
						<button
							className={`bg-[#49654E] rounded-[6.25rem] py-[1.4rem] px-12  text-white text-xl font-normal hover:shadow-lg  hover:scale-110 duration-300`}>Get
							in touch
						</button>
						<p className='flex flex-row justify-center items-center text-[#8BA889] font-normal text-xl mt-10 md:mt-0'>
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
				<div
					className='w-full flex flex-col lg:flex-row justify-between items-start px-4 lg:px-[6.7rem] py-24 max-w-screen-xl mx-auto'>
					<div className='flex flex-col justify-start items-start lg:w-[45.8rem]'>
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
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
									 className='ml-2.5'>
								<path d='M5 12H19' stroke='#ECEDE8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
								<path d='M12 5L19 12L12 19' stroke='#ECEDE8' stroke-width='2' stroke-linecap='round'
											stroke-linejoin='round' />
							</svg>
						</button>
					</div>
					<div className='w-full lg:w-[28.8rem] h-[41.1rem] mt-10 lg:mt-0'>
						<Image src={Ololade} alt="Ololade's pic" className='w-full lg:w-[28.8rem] h-[41.1rem] object-contain' />
					</div>
				</div>
			</section>
			<section id='process' className='w-full max-w-screen-xl mx-auto'>
				<div className='w-full flex flex-col justify-start items-start px-4 lg:px-[7.5rem] py-12'>
					<p className='font-normal text-[#253528] text-base  mb-2'>Here's my deal</p>
					<h2 className='font-bold text-[#253528] text-[2.5rem] mb-6'>Design Process</h2>
					<p className='font-normal text-[#253528]  text-base  mb-2 max-w-[40rem]'>How I make your business reach your
						goals by aligning them to "real" user needs.</p>
					<div className='w-full flex flex-col justify-center items-center space-y-4 mt-10'>
						{selectedProcess.map(item =>
							<button
								className='py-7 px-4 md:px-10 bg-[#ECEDE8] w-full rounded-xl flex flex-col space-y-[1.3rem] text-left'
								key={item.id}
								onClick={() => designProcessCardHandler(item.id)}>
								<div className='w-full flex flex-row justify-between items-center'>
									<h3 className='text-[#253528] font-bold text-xl'>{item.title}</h3>
									{!item.show ?
										<svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M1 1L7 7L13 1' stroke='#253528' stroke-width='2' stroke-linecap='round'
														stroke-linejoin='round' />
										</svg>
										:
										<svg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
											<path d='M13 7L7 1L1 7' stroke='#253528' stroke-width='2' stroke-linecap='round'
														stroke-linejoin='round' />
										</svg>
									}
								</div>
								{item.show && <p className='text-xl font-normal text-[#253528]'><span
									className='font-semibold'>{item.subtitle}</span> {item.details}</p>}
							</button>,
						)}
					</div>
				</div>
			</section>
			<section id='work' className='w-full bg-[#253528]'>
				<div
					className='w-full flex flex-col justify-between items-start px-4 lg:px-[7.5rem] py-12 max-w-screen-xl mx-auto'>
					<p className='font-normal text-white text-base  mb-2'>Selected</p>
					<h2 className='font-bold text-white text-[2.5rem] mb-6'>Works</h2>
					<div className='w-full mt-10 flex flex-col justify-start items-center space-y-20'>
						{works.map(item => {
							return (
								<div
									key={item.id}
									className='relative pt-6 md:pt-12 px-5 md:px-14 w-full h-80 md:h-[59.8rem] overflow-y-hidden  flex flex-col justify-start items-start bg-[#1B261D] rounded-[3.1rem] shadow shadow-[0_4px_22px_rgba(0, 0, 0, 0.25)]'>
									<Image src={item.image} alt='mtn engauge' />
									<div className='w-full flex flex-col md:flex-row justify-between items-center mt-8'>
										<h3 className='font-bold text-white text-[2rem]'>{item.title}</h3>
										<Link href='/'>
											<div className='flex flex-row items-center space-x-4'>
												<p className='font-bold text-white text-lg md:text-xl'>View more</p>
												<svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path d='M1 8H17M17 8L10 1M17 8L10 15' stroke='white' stroke-width='2' stroke-linecap='round'
																stroke-linejoin='round' />
												</svg>
											</div>
										</Link>
									</div>
									<p className='hidden md:block font-normal h-[13.2rem] text-white text-[2rem]  mt-10'>
										{item.text}
									</p>
									<div
										className='hidden md:block  w-full h-[15.2rem] absolute bottom-0 left-0 z-20 bg-gradient-to-t from-[#1B261D] to-[#1B261D]/[.35] overflow-y-hidden ' />

								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;