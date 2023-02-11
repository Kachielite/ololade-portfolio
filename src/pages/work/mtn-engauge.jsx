import React from 'react';
import Image from 'next/image';
import { Footer } from '../../../components/layout/Footer';
import MTNEnguageBrand from '../../../public/images/mtnEngaugeBrand.png';
import exelIcon from '../../../public/icons/excel.png'
import figmaIcon from '../../../public/icons/figma.png'
import orangeIcon from '../../../public/icons/orange.png'
import purple from '../../../public/icons/purple.png';
import mtnEngaugeIllutrations from '../../../public/images/mtnEngaugeIllustration.png'

function MtnEngauge() {
	return (

		<main className='w-full flex flex-col justify-start items-start font-sora bg-[#253528]'>
			<section id='hero' className='w-full max-w-screen-xl mx-auto'>
				<div className='relative z-0 w-full h-[60.6rem] flex flex-col justify-start items-start'>
					<svg width='535' height='493' viewBox='0 0 535 493' fill='none' xmlns='http://www.w3.org/2000/svg'
							 className='absolute -z-10 -top-[2.6rem] left-[53rem]'>
						<path fill-rule='evenodd' clip-rule='evenodd'
									d='M401.25 225.5H353.1V-42H347.75V225.5H326.35V-42H321V225.5H299.6V-42H294.25V225.5H272.85V-42H267.5V225.5H0V230.85H267.5V252.25H0V257.6H267.5V279H0V284.35H267.5V305.75H0V311.1H267.5V359.25C267.5 433.118 327.382 493 401.25 493C475.118 493 535 433.118 535 359.25C535 285.382 475.118 225.5 401.25 225.5ZM294.25 252.25H272.85V230.85H294.25V252.25ZM299.6 252.25H321V230.85H299.6V252.25ZM326.35 252.25H347.75V230.85H326.35V252.25ZM353.1 252.25V230.85H401.25C472.163 230.85 529.65 288.337 529.65 359.25C529.65 430.163 472.163 487.65 401.25 487.65C330.337 487.65 272.85 430.163 272.85 359.25V311.1H294.25V359.25C294.25 418.344 342.156 466.25 401.25 466.25C460.344 466.25 508.25 418.344 508.25 359.25C508.25 300.156 460.344 252.25 401.25 252.25H353.1ZM294.25 305.75H272.85V284.35H294.25V305.75ZM299.6 311.1V359.25C299.6 415.39 345.11 460.9 401.25 460.9C457.39 460.9 502.9 415.39 502.9 359.25C502.9 303.11 457.39 257.6 401.25 257.6H353.1V279H401.25C445.571 279 481.5 314.929 481.5 359.25C481.5 403.571 445.571 439.5 401.25 439.5C356.929 439.5 321 403.571 321 359.25V311.1H299.6ZM326.35 279H347.75V257.6H326.35V279ZM321 257.6V279H299.6V257.6H321ZM321 284.35V305.75H299.6V284.35H321ZM326.35 359.25V311.1H347.75V359.25C347.75 388.797 371.703 412.75 401.25 412.75C430.797 412.75 454.75 388.797 454.75 359.25C454.75 329.703 430.797 305.75 401.25 305.75H353.1V284.35H401.25C442.616 284.35 476.15 317.884 476.15 359.25C476.15 400.616 442.616 434.15 401.25 434.15C359.884 434.15 326.35 400.616 326.35 359.25ZM353.1 359.25C353.1 385.842 374.658 407.4 401.25 407.4C427.842 407.4 449.4 385.842 449.4 359.25C449.4 332.658 427.842 311.1 401.25 311.1H353.1V359.25ZM347.75 305.75V284.35H326.35V305.75H347.75ZM294.25 279H272.85V257.6H294.25V279Z'
									fill='url(#paint0_linear_649_3784)' />
						<defs>
							<linearGradient id='paint0_linear_649_3784' x1='486.85' y1='463.575' x2='2.22135e-05' y2='-52.7'
															gradientUnits='userSpaceOnUse'>
								<stop stop-color='#FFCB05' />
								<stop offset='1' stop-color='white' stop-opacity='0' />
							</linearGradient>
						</defs>
					</svg>
					<div className='flex flex-row space-x-[7.5rem] items-center pt-[3.9rem]'>
						<div className='flex flex-col items-start'>
							<div className='relative z-0 py-5 pl-20 flex items-center'>
								<svg width='283' height='153' viewBox='0 0 283 153' fill='none' xmlns='http://www.w3.org/2000/svg'
										 className='absolute -z-10 top-o left-0'>
									<path d='M0 0H206.5C248.75 0 283 34.2502 283 76.5C283 118.75 248.75 153 206.5 153H0V0Z'
												fill='#49654E' />
								</svg>
								<Image src={MTNEnguageBrand} alt='mtnEngauge brand' />
							</div>
							<div className='relative z-0 py-5 pl-20 flex items-center'>
								<p className='py-[0.7rem] px-[2.1rem] text-[#FFCB05] text-[2rem] bg-[#49654E] rounded-[3.3rem] font-normal mt-[9.5rem]'>UI/UX Case Study</p>
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 -right-10">
									<path d="M8.52657 0.273498C8.91561 0.130751 9.34541 0.148396 9.72144 0.322551C10.0975 0.496705 10.3889 0.813104 10.5317 1.20214L12.3258 6.09172C12.4685 6.48076 12.4509 6.91057 12.2767 7.2866C12.1026 7.66263 11.7862 7.95407 11.3971 8.09682C11.0081 8.23957 10.5783 8.22192 10.2022 8.04777C9.82621 7.87361 9.53476 7.55722 9.39202 7.16818L7.59792 2.2786C7.45517 1.88956 7.47282 1.45975 7.64697 1.08372C7.82113 0.707691 8.13753 0.416245 8.52657 0.273498ZM0.59144 7.55679C0.765687 7.18118 1.0819 6.89008 1.47062 6.74745C1.85935 6.60482 2.28879 6.62232 2.66462 6.7961L7.34319 8.96294C7.53659 9.04435 7.7116 9.16388 7.8578 9.31439C8.00399 9.46491 8.11837 9.64333 8.19411 9.83902C8.26986 10.0347 8.30541 10.2436 8.29866 10.4534C8.2919 10.6631 8.24297 10.8693 8.15479 11.0597C8.0666 11.2501 7.94097 11.4208 7.78539 11.5616C7.62981 11.7024 7.44747 11.8104 7.24923 11.8792C7.051 11.948 6.84094 11.9761 6.63159 11.962C6.42224 11.9478 6.21788 11.8917 6.03071 11.7968L1.35214 9.62998C0.976521 9.45573 0.685427 9.13951 0.542796 8.75079C0.400165 8.36207 0.417661 7.93263 0.59144 7.55679ZM19.2892 0.696177C19.6648 0.870424 19.9559 1.18664 20.0985 1.57536C20.2412 1.96408 20.2237 2.39353 20.0499 2.76936L17.883 7.44793C17.8016 7.64132 17.6821 7.81633 17.5316 7.96253C17.3811 8.10873 17.2026 8.22311 17.007 8.29885C16.8113 8.37459 16.6023 8.41015 16.3926 8.40339C16.1829 8.39663 15.9767 8.3477 15.7863 8.25952C15.5959 8.17134 15.4252 8.04571 15.2844 7.89013C15.1436 7.73455 15.0356 7.5522 14.9668 7.35397C14.898 7.15573 14.8698 6.94568 14.884 6.73632C14.8981 6.52697 14.9543 6.32261 15.0492 6.13544L17.216 1.45687C17.3903 1.08126 17.7065 0.790164 18.0952 0.647533C18.4839 0.504902 18.9134 0.522397 19.2892 0.696177ZM0.168762 18.3194C0.0260147 17.9304 0.0436597 17.5006 0.217814 17.1245C0.391969 16.7485 0.708368 16.4571 1.09741 16.3143L5.98698 14.5202C6.37602 14.3775 6.80583 14.3951 7.18186 14.5693C7.55789 14.7434 7.84934 15.0598 7.99209 15.4489C8.13483 15.8379 8.11719 16.2677 7.94303 16.6437C7.76888 17.0198 7.45248 17.3112 7.06344 17.454L2.17386 19.2481C1.78482 19.3908 1.35501 19.3732 0.978983 19.199C0.602954 19.0248 0.311509 18.7084 0.168762 18.3194ZM12.4326 15.455C11.6239 13.2508 13.7732 11.1129 15.9721 11.9349L37.7247 20.0467C40.0643 20.9192 40.1212 24.2071 37.8152 25.1619L30.4146 28.2169C29.6183 28.5446 28.9915 29.1829 28.672 29.9814L25.6564 37.5722C24.7261 39.9175 21.3916 39.8716 20.5226 37.5031L12.4334 15.457L12.4326 15.455Z" fill="#FFCB05"/>
								</svg>
							</div>
							<div className="flex flex-col space-y-4 pl-20 mt-[3.2rem]">
								<h1 className=' text-[#FFCB05] text-[4.4rem] font-black '>Mtn EnGauge</h1>
								<p className="text-[2rem] font-light text-white">Connect, Engage and Grow</p>
							</div>
							<div className="flex flex-row space-x-5 items-center pl-20 mt-[6.5rem]">
								<Image src={figmaIcon} alt="figma"/>
								<Image src={purple} alt="figma"/>
								<Image src={orangeIcon} alt="figma"/>
								<Image src={exelIcon} alt="figma"/>
							</div>
						</div>
						<div className="w-[37.8rem] h-[47.rem]">
							<Image src={mtnEngaugeIllutrations} alt="mtnEngauge screen snapshots" className="w-full h-full object-contain"/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>


	);
}

export default MtnEngauge;