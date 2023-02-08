import React, { useState } from 'react';
import Image from 'next/image';
import Ololade from '../../public/images/ololade.png';


const Home = () => {
	let design_process = [
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
				<div className='w-full flex flex-col justify-start items-start px-4 lg:px-0 pt-[4.5rem] pb-16'>
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
					className='w-full flex flex-col lg:flex-row justify-between items-start px-4 lg:px-0 py-24 max-w-screen-xl mx-auto'>
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
				<div className='w-full flex flex-col justify-start items-start px-4 lg:px-0 py-12'>
					<p className='font-normal text-[#253528] text-base  mb-2'>Here's my deal</p>
					<h2 className='font-bold text-[#253528] text-[2.5rem] mb-6'>Design Process</h2>
					<p className='font-normal text-[#253528]  text-base  mb-2 max-w-[40rem]'>How I make your business reach your
						goals by aligning them to "real" user needs.</p>
					<div className='w-full flex flex-col justify-center items-center space-y-4 mt-10'>
						{selectedProcess.map(item =>
							<button className='py-7 px-4 md:px-10 bg-[#ECEDE8] w-full rounded-xl flex flex-col space-y-[1.3rem] text-left' key={item.id}
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
							</button>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;