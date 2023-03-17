import React from 'react';
import Image from 'next/image';
import Footer from '../../../components/layout/Footer';
import unionBankBrand from '../../../public/images/unionBank/unionbankBrand.png';
import miroIcon from '../../../public/icons/Miro.png';
import figmaIcon from '../../../public/icons/figma.png';
import excelIcon from '../../../public/icons/excel.png';
import unionBankIllustration from '../../../public/images/unionBank/unionbankIllustration.png';
import colorsUsed from '../../../public/images/unionBank/colorsUsed.png';
import visualDesign from '../../../public/images/unionBank/visual-design.png';
import visualDesign2 from '../../../public/images/unionBank/visual-design2.png';
import visualDesignDesktop from '../../../public/images/unionBank/visual-design-desktop.png';
import visualDesignDesktop2 from '../../../public/images/unionBank/visual-design-desktop2.png';
import unionBankFooter from '../../../public/images/unionBank/union-bank-footer.png';

function UnionBank() {
	return (
		<main className="w-full flex flex-col justify-start items-start font-satoshi bg-[#253528] overflow-x-hidden">
			<section id="hero" className="w-full max-w-screen-xl mx-auto">
				<div className="relative z-0 w-full lg:h-[60.6rem] flex flex-col justify-start items-start fill-">
					<svg
						width="535"
						height="493"
						viewBox="0 0 535 493"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute -z-10 top-[28.3rem] right-0 md:top-[32.3rem] lg:-top-[2.6rem] lg:right-0 md:h-[33.2rem] md:w-[33.2rem]  w-[17.2rem] h-[17.2rem] rotate-180 lg:rotate-0"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M401.25 225.5H353.1V-42H347.75V225.5H326.35V-42H321V225.5H299.6V-42H294.25V225.5H272.85V-42H267.5V225.5H0V230.85H267.5V252.25H0V257.6H267.5V279H0V284.35H267.5V305.75H0V311.1H267.5V359.25C267.5 433.118 327.382 493 401.25 493C475.118 493 535 433.118 535 359.25C535 285.382 475.118 225.5 401.25 225.5ZM294.25 252.25H272.85V230.85H294.25V252.25ZM299.6 252.25H321V230.85H299.6V252.25ZM326.35 252.25H347.75V230.85H326.35V252.25ZM353.1 252.25V230.85H401.25C472.163 230.85 529.65 288.337 529.65 359.25C529.65 430.163 472.163 487.65 401.25 487.65C330.337 487.65 272.85 430.163 272.85 359.25V311.1H294.25V359.25C294.25 418.344 342.156 466.25 401.25 466.25C460.344 466.25 508.25 418.344 508.25 359.25C508.25 300.156 460.344 252.25 401.25 252.25H353.1ZM294.25 305.75H272.85V284.35H294.25V305.75ZM299.6 311.1V359.25C299.6 415.39 345.11 460.9 401.25 460.9C457.39 460.9 502.9 415.39 502.9 359.25C502.9 303.11 457.39 257.6 401.25 257.6H353.1V279H401.25C445.571 279 481.5 314.929 481.5 359.25C481.5 403.571 445.571 439.5 401.25 439.5C356.929 439.5 321 403.571 321 359.25V311.1H299.6ZM326.35 279H347.75V257.6H326.35V279ZM321 257.6V279H299.6V257.6H321ZM321 284.35V305.75H299.6V284.35H321ZM326.35 359.25V311.1H347.75V359.25C347.75 388.797 371.703 412.75 401.25 412.75C430.797 412.75 454.75 388.797 454.75 359.25C454.75 329.703 430.797 305.75 401.25 305.75H353.1V284.35H401.25C442.616 284.35 476.15 317.884 476.15 359.25C476.15 400.616 442.616 434.15 401.25 434.15C359.884 434.15 326.35 400.616 326.35 359.25ZM353.1 359.25C353.1 385.842 374.658 407.4 401.25 407.4C427.842 407.4 449.4 385.842 449.4 359.25C449.4 332.658 427.842 311.1 401.25 311.1H353.1V359.25ZM347.75 305.75V284.35H326.35V305.75H347.75ZM294.25 279H272.85V257.6H294.25V279Z"
							fill="url(#paint0_linear_641_2164)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_641_2164"
								x1="486.85"
								y1="463.575"
								x2="2.22135e-05"
								y2="-52.7"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#03B1F0" />
								<stop offset="1" stopColor="white" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
					<div className="w-screen lg:w-full flex flex-col lg:flex-row space-x-0 lg:space-x-[4.5rem] items-center pt-16 lg:pt-[3.9rem]">
						<div className="flex flex-col items-start w-full lg:w-[40rem]">
							<div className="relative z-0 py-2 lg:py-5 pl-8 lg:pl-20 flex items-center w-full">
								<svg
									width="283"
									height="153"
									viewBox="0 0 283 153"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute -z-10 top-0 left-0 w-[7.25rem] h-[3.94rem] lg:h-fit lg:w-fit"
								>
									<path
										d="M0 0H206.5C248.75 0 283 34.2502 283 76.5C283 118.75 248.75 153 206.5 153H0V0Z"
										fill="#49654E"
									/>
								</svg>

								<Image
									src={unionBankBrand}
									alt="union bank brand"
									className="lg:w-[9.75rem] lg:h-[7rem] w-16 h-[2.88rem] object-contain"
								/>
								<div className="absolute -top-[8.48rem] right-5">
									<div className="relative z-0 lg:py-5 lg:pl-20 flex items-center block lg:hidden">
										<p className="py-2 lg:py-[1.4rem] px-[0.94rem] lg:px-[2.1rem] text-[#03B1F0] text-sm lg:text-[2rem] bg-[#49654E] rounded-[3.3rem] font-normal mt-[9.5rem]">
											UI/UX Case Study
										</p>
										<svg
											width="19"
											height="18"
											viewBox="0 0 19 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="absolute bottom-0 -right-4 lg:-right-10 w-[0.94rem] lg:w-fit h-[1.14rem] lg:h-fit"
										>
											<path
												d="M4.52088 0.326204C4.69066 0.263911 4.87822 0.271611 5.04231 0.34761C5.20641 0.423609 5.33359 0.561681 5.39588 0.731452L6.1788 2.8652C6.2411 3.03497 6.2334 3.22254 6.1574 3.38663C6.0814 3.55072 5.94333 3.67791 5.77356 3.7402C5.60378 3.80249 5.41622 3.79479 5.25213 3.71879C5.08803 3.6428 4.96085 3.50472 4.89855 3.33495L4.11564 1.2012C4.05334 1.03143 4.06104 0.843869 4.13704 0.679774C4.21304 0.51568 4.35111 0.388497 4.52088 0.326204ZM1.0581 3.50454C1.13414 3.34063 1.27213 3.2136 1.44176 3.15135C1.6114 3.08911 1.7988 3.09675 1.96281 3.17258L4.00447 4.11816C4.08887 4.15369 4.16524 4.20585 4.22904 4.27153C4.29284 4.33722 4.34275 4.41508 4.37581 4.50047C4.40886 4.58586 4.42438 4.67704 4.42143 4.76856C4.41848 4.86008 4.39713 4.95007 4.35864 5.03316C4.32016 5.11624 4.26534 5.19073 4.19745 5.25217C4.12955 5.31361 4.04998 5.36075 3.96347 5.39077C3.87697 5.42079 3.7853 5.43308 3.69394 5.4269C3.60258 5.42073 3.5134 5.39622 3.43172 5.35483L1.39006 4.40925C1.22614 4.33321 1.09911 4.19522 1.03687 4.02558C0.974629 3.85595 0.982264 3.66855 1.0581 3.50454ZM9.21755 0.510655C9.38146 0.586694 9.50849 0.724686 9.57073 0.894319C9.63298 1.06395 9.62534 1.25136 9.54951 1.41536L8.60393 3.45703C8.5684 3.54142 8.51624 3.6178 8.45056 3.6816C8.38487 3.74539 8.30701 3.79531 8.22162 3.82836C8.13622 3.86142 8.04505 3.87693 7.95353 3.87398C7.86201 3.87103 7.77202 3.84968 7.68893 3.8112C7.60584 3.77272 7.53136 3.71789 7.46992 3.65C7.40847 3.58211 7.36134 3.50253 7.33132 3.41603C7.3013 3.32952 7.28901 3.23786 7.29518 3.1465C7.30136 3.05514 7.32587 2.96596 7.36726 2.88428L8.31284 0.842613C8.38888 0.678699 8.52687 0.55167 8.6965 0.489427C8.86614 0.427185 9.05354 0.43482 9.21755 0.510655ZM0.873647 8.2012C0.811355 8.03143 0.819055 7.84387 0.895053 7.67977C0.971052 7.51568 1.10912 7.3885 1.2789 7.3262L3.41264 6.54328C3.58242 6.48099 3.76998 6.48869 3.93407 6.56469C4.09817 6.64069 4.22535 6.77876 4.28764 6.94853C4.34994 7.1183 4.34224 7.30587 4.26624 7.46996C4.19024 7.63406 4.05217 7.76124 3.8824 7.82353L1.74865 8.60645C1.57888 8.66874 1.39131 8.66104 1.22722 8.58505C1.06312 8.50905 0.93594 8.37098 0.873647 8.2012ZM6.22545 6.95123C5.87251 5.98933 6.81043 5.0564 7.77003 5.41511L17.2626 8.95497C18.2835 9.33571 18.3084 10.7705 17.3021 11.1872L14.0725 12.5203C13.7251 12.6633 13.4515 12.9419 13.3121 13.2903L11.9961 16.6029C11.5901 17.6263 10.135 17.6063 9.75579 16.5727L6.22576 6.95208L6.22545 6.95123Z"
												fill="#00AFEF"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className="relative z-0 lg:py-5 lg:pl-20 flex items-center hidden lg:block">
								<p className="py-2 lg:py-[1.4rem] px-[0.94rem] lg:px-[2.1rem] text-[#03B1F0] text-sm lg:text-[2rem] bg-[#49654E] rounded-[3.3rem] font-normal mt-[9.5rem]">
									UI/UX Case Study
								</p>
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute bottom-0 -right-4 lg:-right-10 w-[0.94rem] lg:w-fit h-[1.14rem] lg:h-fit"
								>
									<path
										d="M8.52705 0.273498C8.91609 0.130751 9.3459 0.148396 9.72193 0.322551C10.098 0.496706 10.3894 0.813104 10.5322 1.20214L12.3262 6.09172C12.469 6.48076 12.4514 6.91057 12.2772 7.2866C12.103 7.66263 11.7866 7.95407 11.3976 8.09682C11.0086 8.23957 10.5788 8.22192 10.2027 8.04777C9.8267 7.87361 9.53525 7.55722 9.3925 7.16818L7.59841 2.2786C7.45566 1.88956 7.47331 1.45975 7.64746 1.08372C7.82162 0.707691 8.13802 0.416245 8.52705 0.273498ZM0.591928 7.55679C0.766175 7.18118 1.08239 6.89008 1.47111 6.74745C1.85984 6.60482 2.28928 6.62232 2.66511 6.7961L7.34368 8.96293C7.53707 9.04435 7.71209 9.16388 7.85828 9.31439C8.00448 9.46491 8.11886 9.64333 8.1946 9.83902C8.27035 10.0347 8.3059 10.2436 8.29914 10.4534C8.29239 10.6631 8.24346 10.8693 8.15527 11.0597C8.06709 11.2501 7.94146 11.4208 7.78588 11.5616C7.6303 11.7024 7.44795 11.8104 7.24972 11.8792C7.05149 11.948 6.84143 11.9761 6.63208 11.962C6.42272 11.9478 6.21837 11.8917 6.03119 11.7968L1.35262 9.62997C0.977009 9.45573 0.685915 9.13951 0.543284 8.75079C0.400653 8.36207 0.418149 7.93263 0.591928 7.55679ZM19.2897 0.696177C19.6653 0.870424 19.9564 1.18664 20.099 1.57536C20.2416 1.96408 20.2241 2.39353 20.0504 2.76936L17.8835 7.44793C17.8021 7.64132 17.6826 7.81633 17.5321 7.96253C17.3816 8.10873 17.2031 8.22311 17.0074 8.29885C16.8118 8.37459 16.6028 8.41015 16.3931 8.40339C16.1834 8.39663 15.9772 8.3477 15.7868 8.25952C15.5964 8.17134 15.4257 8.04571 15.2849 7.89013C15.1441 7.73455 15.0361 7.5522 14.9673 7.35397C14.8985 7.15574 14.8703 6.94568 14.8845 6.73632C14.8986 6.52697 14.9548 6.32261 15.0497 6.13544L17.2165 1.45687C17.3907 1.08126 17.707 0.790164 18.0957 0.647533C18.4844 0.504902 18.9138 0.522398 19.2897 0.696177ZM0.16925 18.3194C0.026503 17.9304 0.0441478 17.5006 0.218303 17.1245C0.392457 16.7485 0.708856 16.4571 1.0979 16.3143L5.98747 14.5202C6.37651 14.3775 6.80632 14.3951 7.18235 14.5693C7.55838 14.7434 7.84983 15.0598 7.99257 15.4489C8.13532 15.8379 8.11768 16.2677 7.94352 16.6437C7.76937 17.0198 7.45297 17.3112 7.06393 17.454L2.17435 19.2481C1.78531 19.3908 1.3555 19.3732 0.979472 19.199C0.603442 19.0248 0.311997 18.7085 0.16925 18.3194ZM12.4331 15.455C11.6244 13.2508 13.7736 11.1129 15.9726 11.9349L37.7252 20.0467C40.0648 20.9192 40.1217 24.2071 37.8157 25.1619L30.4151 28.2169C29.6188 28.5446 28.992 29.1829 28.6725 29.9814L25.6569 37.5722C24.7266 39.9175 21.3921 39.8716 20.5231 37.5031L12.4339 15.457L12.4331 15.455Z"
										fill="#03B1F0"
									/>
								</svg>
							</div>
							<div className="flex flex-col w-full justify-center items-center lg:items-start space-y-4 md:pl-20 mt-[3.2rem] px-[4rem]">
								<h1 className="text-[#03B1F0] text-[2rem] md:text-[4.4rem] font-['Satoshi-Black']">
									Union Bank
								</h1>
								<p className="text-base md:text-[2rem] font-light text-white">
									Streamlined banking experience
								</p>
							</div>
							<div className="flex flex-row space-x-4 md:space-x-5 justify-center md:justify-start items-center pl-20 md:pl-44 lg:pl-20 mt-4 md:mt-10 lg:mt-[6.5rem] px-[4rem] w-full">
								<Image
									src={figmaIcon}
									alt="figma"
									className="w-[2.5rem] h-[2.5rem] md:w-[5.56rem] md:h-[5.56rem]"
								/>
								<Image
									src={miroIcon}
									alt="miro"
									className="w-[2.5rem] h-[2.5rem] md:w-[5.56rem] md:h-[5.56rem]"
								/>
								<Image
									src={excelIcon}
									alt="Google Icon"
									className="w-[2.5rem] h-[2.5rem] md:w-[5.56rem] md:h-[5.56rem] object-contain"
								/>
							</div>
						</div>
						<div className="w-[19.5rem] h-[24.25rem] md:w-[37.8rem] md:h-[47rem] mt-[2.4rem] lg:mt-12">
							<Image
								src={unionBankIllustration}
								alt="utask screen snapshots"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				id="Problem statement"
				className="relative w-full max-w-screen-xl mx-auto pt-24 lg:pt-36 overflow-x-hidden"
			>
				<svg
					width="159"
					height="52"
					viewBox="0 0 159 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-[4.67rem] h-[8rem] lg:w-[18.3rem] lg:h-[20.4rem] absolute -top-10 lg:-top-32 lg:-left-20 -left-8"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-165.667 203.125C-188.08 203.125 -206.25 184.937 -206.25 162.5C-206.25 140.063 -188.08 121.875 -165.667 121.875L-3.33331 121.875C19.0802 121.875 37.25 140.063 37.25 162.5C37.25 184.937 19.0802 203.125 -3.33331 203.125H-165.667ZM-165.667 130L-3.33331 130C14.5975 130 29.1333 144.551 29.1333 162.5C29.1333 180.449 14.5975 195 -3.33331 195L-165.667 195C-183.598 195 -198.133 180.449 -198.133 162.5C-198.133 144.551 -183.598 130 -165.667 130Z"
						fill="url(#paint0_radial_641_2163)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-230.6 162.5C-230.6 198.399 -201.528 227.5 -165.667 227.5H-3.33331C32.5284 227.5 61.6 198.399 61.6 162.5C61.6 126.602 32.5284 97.5 -3.33331 97.5L-165.667 97.5C-201.528 97.5 -230.6 126.602 -230.6 162.5ZM-3.33331 105.625L-165.667 105.625C-197.046 105.625 -222.483 131.089 -222.483 162.5C-222.483 193.911 -197.046 219.375 -165.667 219.375H-3.33331C28.0457 219.375 53.4833 193.911 53.4833 162.5C53.4833 131.089 28.0457 105.625 -3.33331 105.625Z"
						fill="url(#paint1_radial_641_2163)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-165.667 251.875C-214.976 251.875 -254.95 211.86 -254.95 162.5C-254.95 113.14 -214.976 73.125 -165.667 73.125L-3.33331 73.125C45.9765 73.125 85.95 113.14 85.95 162.5C85.95 211.86 45.9765 251.875 -3.33331 251.875H-165.667ZM-165.667 81.25L-3.33331 81.25C41.4938 81.25 77.8333 117.627 77.8333 162.5C77.8333 207.373 41.4938 243.75 -3.33331 243.75H-165.667C-210.494 243.75 -246.833 207.373 -246.833 162.5C-246.833 117.627 -210.494 81.25 -165.667 81.25Z"
						fill="url(#paint2_radial_641_2163)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-279.3 162.5C-279.3 225.322 -228.425 276.25 -165.667 276.25H-3.33331C59.4247 276.25 110.3 225.322 110.3 162.5C110.3 99.6776 59.4247 48.75 -3.33331 48.75H-165.667C-228.425 48.75 -279.3 99.6776 -279.3 162.5ZM-3.33331 56.875H-165.667C-223.942 56.875 -271.183 104.165 -271.183 162.5C-271.183 220.835 -223.942 268.125 -165.667 268.125H-3.33331C54.942 268.125 102.183 220.835 102.183 162.5C102.183 104.165 54.9419 56.875 -3.33331 56.875Z"
						fill="url(#paint3_radial_641_2163)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-165.667 300.625C-241.873 300.625 -303.65 238.784 -303.65 162.5C-303.65 86.2157 -241.873 24.375 -165.667 24.375H-3.33331C72.8728 24.375 134.65 86.2157 134.65 162.5C134.65 238.784 72.8728 300.625 -3.33331 300.625H-165.667ZM-165.667 32.5H-3.33331C68.3901 32.5 126.533 90.703 126.533 162.5C126.533 234.297 68.3901 292.5 -3.33331 292.5H-165.667C-237.39 292.5 -295.533 234.297 -295.533 162.5C-295.533 90.703 -237.39 32.5 -165.667 32.5Z"
						fill="url(#paint4_radial_641_2163)"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-165.667 325C-255.321 325 -328 252.246 -328 162.5C-328 72.7537 -255.321 0 -165.667 0H-3.33331C86.3209 0 159 72.7537 159 162.5C159 252.246 86.3209 325 -3.33331 325H-165.667ZM-165.667 8.125H-3.33331C81.8382 8.125 150.883 77.241 150.883 162.5C150.883 247.759 81.8382 316.875 -3.33331 316.875H-165.667C-250.838 316.875 -319.883 247.759 -319.883 162.5C-319.883 77.241 -250.838 8.125 -165.667 8.125Z"
						fill="url(#paint5_radial_641_2163)"
					/>
					<defs>
						<radialGradient
							id="paint0_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint1_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint2_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint3_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint4_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
						<radialGradient
							id="paint5_radial_641_2163"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(-84.5 162.5) rotate(-11.3212) scale(331.109 220.949)"
						>
							<stop stopColor="#03B1F0" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</radialGradient>
					</defs>
				</svg>

				<div className="flex flex-col justify-start items-center w-full space-y-7  px-4 lg:px-20 lg:mt-[5rem]">
					<div className="relative flex justify-center items-center text-center w-full">
						<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white">
							Problem <span className="text-[#03B1F0]">Statement</span>
						</h2>
						<div className="absolute z-10 top-px bg-[#49654E] h-4 w-[11.5rem] lg:w-[22.5rem] lg:h-8 rounded-[5.9rem]" />
					</div>
					<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem]">
						Union Bank is often perceived as a traditional, conservative bank,
						and its current mobile banking app reflects this image. The app is
						not user-friendly, with a cluttered interface and confusing
						navigation. This leads to low usage and customer satisfaction among
						younger demographics.
					</p>
				</div>
				<div className="flex flex-col justify-start items-center w-full space-y-1 pt-12 lg:pt-[6.52rem] px-4 lg:px-20 text-justify">
					<div className="relative flex justify-center items-center text-center w-full">
						<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white">
							Possible <span className="text-[#03B1F0]">Solution </span>
						</h2>
						<div className="absolute z-10 top-px bg-[#49654E] h-4 w-[11.5rem] lg:w-[22.5rem] lg:h-8 rounded-[5.9rem]" />
					</div>
					<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] pt-10">
						To address the problem of a cluttered and confusing mobile banking
						app, a new design concept was proposed with a focus on simplicity
						and ease of use. The proposed solution featured:
					</p>
					<ul className="list-disc pl-6 text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-0 text-left flex flex-col space-y-3 w-full">
						<li>a streamlined navigation system,</li>
						<li>a sleek and modern look and feel,</li>
						<li>an improved onboarding experience,</li>
						<li>enhanced security features</li>
					</ul>
				</div>
				<div className="flex flex-col lg:flex-row justify-start items-start space-x-0 lg:space-x-24 w-full space-y-7 pt-12 lg:pt-[6.52rem] px-4 lg:px-20 text-justify">
					<div className="w-full lg:w-fit flex flex-col justify-start items-start lg:pt-10 w-full">
						<div className="relative flex justify-center lg:justify-start items-center lg:items-start text-center  w-full lg:w-[19.5rem] pb-10 lg:pb-[5.87rem]">
							<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white text-center w-full">
								Target <span className="text-[#03B1F0]">Audience </span>
							</h2>
							<div className="absolute z-10 top-px lg:top-4 bg-[#49654E] h-4 w-[10rem] lg:w-[19.5rem] lg:h-8 rounded-[5.9rem]" />
						</div>
						<ul className="bg-[#49654E] pl-10 py-5 pr-4 lg:py-[2.38rem] lg:px-[3.12rem] rounded-xl list-disc  text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light flex flex-col space-y-1.5 w-full lg:w-screen ">
							<li>Age: 18-35</li>
							<li>Tech-savvy: Comfortable with technology and smartphones</li>
							<li>Bank Habits: Prefer to do their banking online</li>
							<li>
								Habits and Needs: Expect a user-friendly and visually appealing
								experience
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse justify-start items-center lg:items-start w-full space-y-3 pt-12 lg:pt-0 px-4 lg:px-20 text-justify">
					<div className="w-full flex flex-col justify-start items-start lg:pt-56">
						<div className="relative flex justify-center  items-center text-center w-full mb-12 lg:mb-10">
							<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white lg:pl-2">
								The <span className="text-[#03B1F0]">Approach </span>
							</h2>
							<div className="absolute z-10 top-px bg-[#49654E] h-4 w-[8.5rem] lg:w-[17rem] lg:h-8 rounded-[5.9rem]" />
						</div>
						<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] lg:max-w-6xl">
							I followed a user-centered design approach to create the solution.
							This involved a focus on the needs and preferences of the target
							audience and a design process that was iterative and based on
							feedback.
						</p>
						<div className=" py-3">
							<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] lg:max-w-6xl">
								The following steps were taken:{' '}
							</p>
							<ul className="pl-10 py-2 pr-4  lg:px-[3.12rem] rounded-xl list-disc  text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light flex flex-col space-y-1.5 w-full ">
								<li>
									1. Research: Conducted extensive research on the target
									audience and their banking habits, as well as competitors'
									mobile apps.
								</li>
								<li>
									2. Ideation: Generated multiple design concepts and prototypes
									based on the research findings.
								</li>
								<li>
									3. User Testing: Conducted user testing on multiple prototypes
									to gather feedback and make iterative improvements.
								</li>
								<li>
									4. Final Design: Based on the feedback, a final design was
									created that addressed the pain points and improved the
									overall user experience.
								</li>
							</ul>
						</div>

						<div className="py-3">
							<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] lg:max-w-6xl">
								Design Principles:{' '}
							</p>
							<ul className="pl-10 py-2 pr-4  lg:px-[3.12rem] rounded-xl list-disc  text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light flex flex-col space-y-1.5 w-full">
								<li>
									Simplicity: The design aimed to simplify the mobile banking
									experience by reducing clutter and making it easier to use.
								</li>
								<li>
									Visually Appealing: The design aimed to be visually appealing
									and modern, to appeal to the target audience.
								</li>
								<li>
									User-centered: The design was focused on meeting the needs and
									preferences of the target audience.
								</li>
							</ul>
						</div>
						<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] lg:max-w-6xl">
							By following this approach, I was able to create a solution that
							addressed the key pain points and provided a more user-friendly
							and visually appealing mobile banking experience for Union Bank
							customers.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full max-w-screen-xl mx-auto py-12 lg:pt-36 px-4">
				<div className="flex flex-col justify-start items-center w-full mb-6">
					<div className="relative flex justify-center items-center text-center w-full pb-4">
						<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white">
							Typography & <span className="text-[#03B1F0]">Colors </span>
						</h2>
						<div className="absolute z-10 top-px bg-[#49654E] h-4 w-[12.5rem] lg:w-[23.5rem] lg:h-8 rounded-[5.9rem]" />
					</div>
					<div className="flex flex-row justify-start items-center space-x-2 w-full py-4 lg:px-20 lg:pt-[4.88rem] pt-4">
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="lg:h-[2.12rem] lg:w-[2.12rem]"
						>
							<circle cx="8" cy="8.51343" r="8" fill="#49654E" />
							<circle cx="8.23575" cy="8.74869" r="6.35294" fill="#49654E" />
							<circle cx="7.99983" cy="8.5135" r="4.70588" fill="#00AFEF" />
						</svg>

						<h3 className="text-white text-base lg:text-[2.12rem] font-['Satoshi-Medium']">
							Font Used
						</h3>
					</div>
					<div className="w-full flex flex-col  justify-center items-center font-raleway pt-4 lg:pt-[3.75rem]">
						<div className="w-full flex flex-col md:flex-row justify-center md:justify-between  items-center md:items-start lg:px-20">
							<div className="w-full md:w-fit flex justify-start items-center pb-4">
								<svg
									width="186"
									height="81"
									viewBox="0 0 186 81"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block lg:hidden"
								>
									<rect
										x="4.83203"
										y="5.46436"
										width="176.337"
										height="70.8009"
										stroke="white"
										strokeWidth="1.5"
									/>
									<rect
										x="0.5"
										y="1.13257"
										width="6.57994"
										height="6.57994"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="178.92"
										y="1.13257"
										width="6.57994"
										height="6.57994"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="178.92"
										y="73.4338"
										width="6.57994"
										height="6.57994"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="0.5"
										y="73.4338"
										width="6.57994"
										height="6.57994"
										fill="#1B261D"
										stroke="white"
									/>
									<path
										d="M19.664 54V28.44H30.968C32.144 28.44 33.224 28.68 34.208 29.16C35.216 29.64 36.08 30.288 36.8 31.104C37.544 31.92 38.108 32.832 38.492 33.84C38.9 34.848 39.104 35.88 39.104 36.936C39.104 38.016 38.912 39.06 38.528 40.068C38.168 41.052 37.64 41.916 36.944 42.66C36.248 43.404 35.432 43.98 34.496 44.388L40.328 54H34.856L29.6 45.432H24.632V54H19.664ZM24.632 41.076H30.86C31.484 41.076 32.036 40.896 32.516 40.536C32.996 40.152 33.38 39.648 33.668 39.024C33.956 38.4 34.1 37.704 34.1 36.936C34.1 36.12 33.932 35.412 33.596 34.812C33.26 34.188 32.828 33.696 32.3 33.336C31.796 32.976 31.244 32.796 30.644 32.796H24.632V41.076ZM41.525 48.42C41.525 47.196 41.861 46.128 42.533 45.216C43.229 44.28 44.189 43.56 45.413 43.056C46.637 42.552 48.041 42.3 49.625 42.3C50.417 42.3 51.221 42.36 52.037 42.48C52.853 42.6 53.561 42.792 54.161 43.056V42.048C54.161 40.848 53.801 39.924 53.081 39.276C52.385 38.628 51.341 38.304 49.949 38.304C48.917 38.304 47.933 38.484 46.997 38.844C46.061 39.204 45.077 39.732 44.045 40.428L42.497 37.26C43.745 36.444 45.017 35.832 46.313 35.424C47.633 35.016 49.013 34.812 50.453 34.812C53.141 34.812 55.229 35.484 56.717 36.828C58.229 38.172 58.985 40.092 58.985 42.588V48.6C58.985 49.104 59.069 49.464 59.237 49.68C59.429 49.896 59.729 50.028 60.137 50.076V54C59.705 54.072 59.309 54.132 58.949 54.18C58.613 54.228 58.325 54.252 58.085 54.252C57.125 54.252 56.393 54.036 55.889 53.604C55.409 53.172 55.109 52.644 54.989 52.02L54.881 51.048C54.065 52.104 53.045 52.92 51.821 53.496C50.597 54.072 49.349 54.36 48.077 54.36C46.829 54.36 45.701 54.108 44.693 53.604C43.709 53.076 42.929 52.368 42.353 51.48C41.801 50.568 41.525 49.548 41.525 48.42ZM53.261 49.392C53.525 49.104 53.741 48.816 53.909 48.528C54.077 48.24 54.161 47.976 54.161 47.736V45.828C53.585 45.588 52.961 45.408 52.289 45.288C51.617 45.144 50.981 45.072 50.381 45.072C49.133 45.072 48.101 45.348 47.285 45.9C46.493 46.428 46.097 47.136 46.097 48.024C46.097 48.504 46.229 48.96 46.493 49.392C46.757 49.824 47.141 50.172 47.645 50.436C48.149 50.7 48.749 50.832 49.445 50.832C50.165 50.832 50.873 50.7 51.569 50.436C52.265 50.148 52.829 49.8 53.261 49.392ZM63.4569 27.72H68.2809V47.952C68.2809 48.816 68.4249 49.404 68.7129 49.716C69.0009 50.004 69.3969 50.148 69.9009 50.148C70.2849 50.148 70.6809 50.1 71.0889 50.004C71.4969 49.908 71.8569 49.788 72.1689 49.644L72.8169 53.316C72.1689 53.628 71.4129 53.868 70.5489 54.036C69.6849 54.204 68.9049 54.288 68.2089 54.288C66.6969 54.288 65.5209 53.892 64.6809 53.1C63.8649 52.284 63.4569 51.132 63.4569 49.644V27.72ZM83.6667 54.36C82.1547 54.36 80.7867 54.108 79.5627 53.604C78.3387 53.076 77.2947 52.368 76.4307 51.48C75.5667 50.568 74.8947 49.536 74.4147 48.384C73.9587 47.208 73.7307 45.972 73.7307 44.676C73.7307 42.876 74.1267 41.232 74.9187 39.744C75.7347 38.256 76.8867 37.068 78.3747 36.18C79.8867 35.268 81.6627 34.812 83.7027 34.812C85.7667 34.812 87.5307 35.268 88.9947 36.18C90.4587 37.068 91.5747 38.256 92.3427 39.744C93.1347 41.208 93.5307 42.792 93.5307 44.496C93.5307 44.784 93.5187 45.084 93.4947 45.396C93.4707 45.684 93.4467 45.924 93.4227 46.116H78.8427C78.9387 47.076 79.2147 47.916 79.6707 48.636C80.1507 49.356 80.7507 49.908 81.4707 50.292C82.2147 50.652 83.0067 50.832 83.8467 50.832C84.8067 50.832 85.7067 50.604 86.5467 50.148C87.4107 49.668 87.9987 49.044 88.3107 48.276L92.4507 49.428C91.9947 50.388 91.3347 51.24 90.4707 51.984C89.6307 52.728 88.6347 53.316 87.4827 53.748C86.3307 54.156 85.0587 54.36 83.6667 54.36ZM78.7347 43.056H88.5987C88.5027 42.096 88.2267 41.268 87.7707 40.572C87.3387 39.852 86.7627 39.3 86.0427 38.916C85.3227 38.508 84.5187 38.304 83.6307 38.304C82.7667 38.304 81.9747 38.508 81.2547 38.916C80.5587 39.3 79.9827 39.852 79.5267 40.572C79.0947 41.268 78.8307 42.096 78.7347 43.056ZM119.342 35.136H123.914L116.03 54H111.998L108.83 45.9L105.734 54H101.666L93.8181 35.136H98.3541L103.97 49.392L106.166 43.236L102.89 35.172H106.886L108.83 40.932L110.81 35.172H114.806L111.53 43.236L113.762 49.392L119.342 35.136ZM124.388 48.42C124.388 47.196 124.724 46.128 125.396 45.216C126.092 44.28 127.052 43.56 128.276 43.056C129.5 42.552 130.904 42.3 132.488 42.3C133.28 42.3 134.084 42.36 134.9 42.48C135.716 42.6 136.424 42.792 137.024 43.056V42.048C137.024 40.848 136.664 39.924 135.944 39.276C135.248 38.628 134.204 38.304 132.812 38.304C131.78 38.304 130.796 38.484 129.86 38.844C128.924 39.204 127.94 39.732 126.908 40.428L125.36 37.26C126.608 36.444 127.88 35.832 129.176 35.424C130.496 35.016 131.876 34.812 133.316 34.812C136.004 34.812 138.092 35.484 139.58 36.828C141.092 38.172 141.848 40.092 141.848 42.588V48.6C141.848 49.104 141.932 49.464 142.1 49.68C142.292 49.896 142.592 50.028 143 50.076V54C142.568 54.072 142.172 54.132 141.812 54.18C141.476 54.228 141.188 54.252 140.948 54.252C139.988 54.252 139.256 54.036 138.752 53.604C138.272 53.172 137.972 52.644 137.852 52.02L137.744 51.048C136.928 52.104 135.908 52.92 134.684 53.496C133.46 54.072 132.212 54.36 130.94 54.36C129.692 54.36 128.564 54.108 127.556 53.604C126.572 53.076 125.792 52.368 125.216 51.48C124.664 50.568 124.388 49.548 124.388 48.42ZM136.124 49.392C136.388 49.104 136.604 48.816 136.772 48.528C136.94 48.24 137.024 47.976 137.024 47.736V45.828C136.448 45.588 135.824 45.408 135.152 45.288C134.48 45.144 133.844 45.072 133.244 45.072C131.996 45.072 130.964 45.348 130.148 45.9C129.356 46.428 128.96 47.136 128.96 48.024C128.96 48.504 129.092 48.96 129.356 49.392C129.62 49.824 130.004 50.172 130.508 50.436C131.012 50.7 131.612 50.832 132.308 50.832C133.028 50.832 133.736 50.7 134.432 50.436C135.128 50.148 135.692 49.8 136.124 49.392ZM146.049 57.672C146.481 57.768 146.877 57.852 147.237 57.924C147.621 57.996 147.945 58.032 148.209 58.032C148.665 58.032 149.037 57.912 149.325 57.672C149.637 57.456 149.937 57.048 150.225 56.448C150.513 55.872 150.813 55.056 151.125 54L143.673 35.136H148.677L153.753 49.068L158.217 35.136H162.825L154.905 57.744C154.617 58.584 154.173 59.34 153.573 60.012C152.997 60.708 152.265 61.248 151.377 61.632C150.513 62.04 149.541 62.244 148.461 62.244C148.077 62.244 147.693 62.208 147.309 62.136C146.925 62.088 146.505 61.992 146.049 61.848V57.672Z"
										fill="#00AFEF"
									/>
									<line
										x1="170.375"
										y1="21"
										x2="170.375"
										y2="61"
										stroke="white"
										strokeWidth="0.75"
									/>
								</svg>
								<svg
									width="319"
									height="137"
									viewBox="0 0 319 137"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="hidden lg:block"
								>
									<rect
										x="7.75"
										y="7.75"
										width="303.5"
										height="122.5"
										stroke="white"
										strokeWidth="1.5"
									/>
									<rect
										x="0.5"
										y="0.5"
										width="12"
										height="12"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="306.5"
										y="0.5"
										width="12"
										height="12"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="306.5"
										y="124.5"
										width="12"
										height="12"
										fill="#1B261D"
										stroke="white"
									/>
									<rect
										x="0.5"
										y="124.5"
										width="12"
										height="12"
										fill="#1B261D"
										stroke="white"
									/>
									<path
										d="M19.18 94V44.3H41.16C43.4467 44.3 45.5467 44.7667 47.46 45.7C49.42 46.6333 51.1 47.8933 52.5 49.48C53.9467 51.0667 55.0433 52.84 55.79 54.8C56.5833 56.76 56.98 58.7667 56.98 60.82C56.98 62.92 56.6067 64.95 55.86 66.91C55.16 68.8233 54.1333 70.5033 52.78 71.95C51.4267 73.3967 49.84 74.5167 48.02 75.31L59.36 94H48.72L38.5 77.34H28.84V94H19.18ZM28.84 68.87H40.95C42.1633 68.87 43.2367 68.52 44.17 67.82C45.1033 67.0733 45.85 66.0933 46.41 64.88C46.97 63.6667 47.25 62.3133 47.25 60.82C47.25 59.2333 46.9233 57.8567 46.27 56.69C45.6167 55.4767 44.7767 54.52 43.75 53.82C42.77 53.12 41.6967 52.77 40.53 52.77H28.84V68.87ZM61.6875 83.15C61.6875 80.77 62.3408 78.6933 63.6475 76.92C65.0008 75.1 66.8675 73.7 69.2475 72.72C71.6275 71.74 74.3575 71.25 77.4375 71.25C78.9775 71.25 80.5408 71.3667 82.1275 71.6C83.7142 71.8333 85.0908 72.2067 86.2575 72.72V70.76C86.2575 68.4267 85.5575 66.63 84.1575 65.37C82.8042 64.11 80.7742 63.48 78.0675 63.48C76.0608 63.48 74.1475 63.83 72.3275 64.53C70.5075 65.23 68.5942 66.2567 66.5875 67.61L63.5775 61.45C66.0042 59.8633 68.4775 58.6733 70.9975 57.88C73.5642 57.0867 76.2475 56.69 79.0475 56.69C84.2742 56.69 88.3342 57.9967 91.2275 60.61C94.1675 63.2233 95.6375 66.9567 95.6375 71.81V83.5C95.6375 84.48 95.8008 85.18 96.1275 85.6C96.5008 86.02 97.0842 86.2767 97.8775 86.37V94C97.0375 94.14 96.2675 94.2567 95.5675 94.35C94.9142 94.4433 94.3542 94.49 93.8875 94.49C92.0208 94.49 90.5975 94.07 89.6175 93.23C88.6842 92.39 88.1008 91.3633 87.8675 90.15L87.6575 88.26C86.0708 90.3133 84.0875 91.9 81.7075 93.02C79.3275 94.14 76.9008 94.7 74.4275 94.7C72.0008 94.7 69.8075 94.21 67.8475 93.23C65.9342 92.2033 64.4175 90.8267 63.2975 89.1C62.2242 87.3267 61.6875 85.3433 61.6875 83.15ZM84.5075 85.04C85.0208 84.48 85.4408 83.92 85.7675 83.36C86.0942 82.8 86.2575 82.2867 86.2575 81.82V78.11C85.1375 77.6433 83.9242 77.2933 82.6175 77.06C81.3108 76.78 80.0742 76.64 78.9075 76.64C76.4808 76.64 74.4742 77.1767 72.8875 78.25C71.3475 79.2767 70.5775 80.6533 70.5775 82.38C70.5775 83.3133 70.8342 84.2 71.3475 85.04C71.8608 85.88 72.6075 86.5567 73.5875 87.07C74.5675 87.5833 75.7342 87.84 77.0875 87.84C78.4875 87.84 79.8642 87.5833 81.2175 87.07C82.5708 86.51 83.6675 85.8333 84.5075 85.04ZM104.333 42.9H113.713V82.24C113.713 83.92 113.993 85.0633 114.553 85.67C115.113 86.23 115.883 86.51 116.863 86.51C117.609 86.51 118.379 86.4167 119.173 86.23C119.966 86.0433 120.666 85.81 121.273 85.53L122.533 92.67C121.273 93.2767 119.803 93.7433 118.123 94.07C116.443 94.3967 114.926 94.56 113.573 94.56C110.633 94.56 108.346 93.79 106.713 92.25C105.126 90.6633 104.333 88.4233 104.333 85.53V42.9ZM143.63 94.7C140.69 94.7 138.03 94.21 135.65 93.23C133.27 92.2033 131.24 90.8267 129.56 89.1C127.88 87.3267 126.573 85.32 125.64 83.08C124.753 80.7933 124.31 78.39 124.31 75.87C124.31 72.37 125.08 69.1733 126.62 66.28C128.206 63.3867 130.446 61.0767 133.34 59.35C136.28 57.5767 139.733 56.69 143.7 56.69C147.713 56.69 151.143 57.5767 153.99 59.35C156.836 61.0767 159.006 63.3867 160.5 66.28C162.04 69.1267 162.81 72.2067 162.81 75.52C162.81 76.08 162.786 76.6633 162.74 77.27C162.693 77.83 162.646 78.2967 162.6 78.67H134.25C134.436 80.5367 134.973 82.17 135.86 83.57C136.793 84.97 137.96 86.0433 139.36 86.79C140.806 87.49 142.346 87.84 143.98 87.84C145.846 87.84 147.596 87.3967 149.23 86.51C150.91 85.5767 152.053 84.3633 152.66 82.87L160.71 85.11C159.823 86.9767 158.54 88.6333 156.86 90.08C155.226 91.5267 153.29 92.67 151.05 93.51C148.81 94.3033 146.336 94.7 143.63 94.7ZM134.04 72.72H153.22C153.033 70.8533 152.496 69.2433 151.61 67.89C150.77 66.49 149.65 65.4167 148.25 64.67C146.85 63.8767 145.286 63.48 143.56 63.48C141.88 63.48 140.34 63.8767 138.94 64.67C137.586 65.4167 136.466 66.49 135.58 67.89C134.74 69.2433 134.226 70.8533 134.04 72.72ZM212.999 57.32H221.889L206.559 94H198.719L192.559 78.25L186.539 94H178.629L163.369 57.32H172.189L183.109 85.04L187.379 73.07L181.009 57.39H188.779L192.559 68.59L196.409 57.39H204.179L197.809 73.07L202.149 85.04L212.999 57.32ZM222.811 83.15C222.811 80.77 223.464 78.6933 224.771 76.92C226.124 75.1 227.991 73.7 230.371 72.72C232.751 71.74 235.481 71.25 238.561 71.25C240.101 71.25 241.664 71.3667 243.251 71.6C244.837 71.8333 246.214 72.2067 247.381 72.72V70.76C247.381 68.4267 246.681 66.63 245.281 65.37C243.927 64.11 241.897 63.48 239.191 63.48C237.184 63.48 235.271 63.83 233.451 64.53C231.631 65.23 229.717 66.2567 227.711 67.61L224.701 61.45C227.127 59.8633 229.601 58.6733 232.121 57.88C234.687 57.0867 237.371 56.69 240.171 56.69C245.397 56.69 249.457 57.9967 252.351 60.61C255.291 63.2233 256.761 66.9567 256.761 71.81V83.5C256.761 84.48 256.924 85.18 257.251 85.6C257.624 86.02 258.207 86.2767 259.001 86.37V94C258.161 94.14 257.391 94.2567 256.691 94.35C256.037 94.4433 255.477 94.49 255.011 94.49C253.144 94.49 251.721 94.07 250.741 93.23C249.807 92.39 249.224 91.3633 248.991 90.15L248.781 88.26C247.194 90.3133 245.211 91.9 242.831 93.02C240.451 94.14 238.024 94.7 235.551 94.7C233.124 94.7 230.931 94.21 228.971 93.23C227.057 92.2033 225.541 90.8267 224.421 89.1C223.347 87.3267 222.811 85.3433 222.811 83.15ZM245.631 85.04C246.144 84.48 246.564 83.92 246.891 83.36C247.217 82.8 247.381 82.2867 247.381 81.82V78.11C246.261 77.6433 245.047 77.2933 243.741 77.06C242.434 76.78 241.197 76.64 240.031 76.64C237.604 76.64 235.597 77.1767 234.011 78.25C232.471 79.2767 231.701 80.6533 231.701 82.38C231.701 83.3133 231.957 84.2 232.471 85.04C232.984 85.88 233.731 86.5567 234.711 87.07C235.691 87.5833 236.857 87.84 238.211 87.84C239.611 87.84 240.987 87.5833 242.341 87.07C243.694 86.51 244.791 85.8333 245.631 85.04ZM264.929 101.14C265.769 101.327 266.539 101.49 267.239 101.63C267.985 101.77 268.615 101.84 269.129 101.84C270.015 101.84 270.739 101.607 271.299 101.14C271.905 100.72 272.489 99.9267 273.049 98.76C273.609 97.64 274.192 96.0533 274.799 94L260.309 57.32H270.039L279.909 84.41L288.589 57.32H297.549L282.149 101.28C281.589 102.913 280.725 104.383 279.559 105.69C278.439 107.043 277.015 108.093 275.289 108.84C273.609 109.633 271.719 110.03 269.619 110.03C268.872 110.03 268.125 109.96 267.379 109.82C266.632 109.727 265.815 109.54 264.929 109.26V101.14Z"
										fill="#03B1F0"
									/>
									<line
										x1="305.375"
										y1="34"
										x2="305.375"
										y2="104"
										stroke="white"
										strokeWidth="0.75"
									/>
								</svg>
							</div>
							<p className="text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-0 lg:w-[37.56rem] lg:h-[9.52rem]">
								Raleway font was chosen because of its legibility, modern and
								sleek appearance, versatility, availability, and compatibility
								with the brand's visual identity.
							</p>
						</div>
						<div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center lg:pl-20">
							<div className="w-full flex flex-col justify-start items-start space-y-[0.81rem] md:space-y-6 py-4">
								<p className="text-white text-left text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light  lg:max-w-6xl">
									ABCDEFGHIJKLMNOPQRSTUVWXYZ
								</p>
								<p className="lowercase text-white text-left text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light  lg:max-w-6xl">
									ABCDEFGHIJKLMNOPQRSTUVWXYZ
								</p>
								<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light  lg:max-w-6xl">
									1234567890
								</p>
							</div>
							<div className="w-full flex flex-row justify-between items-center space-x-14 lg:space-[3.3rem]  p-6 bg-[#49654E] rounded-l-[1.5rem] lg:px-[4.75rem] lg:py-[2.2rem]">
								<div className="flex flex-col space-y-4 lg:space-y-[1.87rem] items-start w-full  text-white">
									<p className="font-bold text-sm lg:text-[1.5rem]">
										Raleway Bold
									</p>
									<p className="font-normal text-sm lg:text-[1.5rem]">
										Raleway Regular
									</p>
								</div>
								<div className="flex flex-col space-y-4 lg:space-y-[1.87rem]  items-start w-full  text-white">
									<p className="font-medium text-sm lg:text-[1.5rem]">
										Raleway Medium
									</p>
									<p className="font-light text-sm lg:text-[1.5rem]">
										Raleway Light
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-start items-center space-x-2 w-full pt-10 pb-2 lg:px-20 lg:pt-[13.75rem] lg:pb-[3.75rem]">
						<svg
							width="16"
							height="17"
							viewBox="0 0 16 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="lg:h-[2.12rem] lg:w-[2.12rem]"
						>
							<circle cx="8" cy="8.51343" r="8" fill="#49654E" />
							<circle cx="8.23575" cy="8.74869" r="6.35294" fill="#49654E" />
							<circle cx="7.99983" cy="8.5135" r="4.70588" fill="#00AFEF" />
						</svg>
						<h3 className="text-white text-base lg:text-[2.12rem] font-['Satoshi-Medium']">
							Color Used
						</h3>
					</div>
					<div className="w-full py-6 lg:px-20">
						<Image
							src={colorsUsed}
							alt="colors used"
							className="block lg:hidden"
						/>
					</div>
					<div className="w-full py-3 lg:px-20 hidden md:flex flex-row justify-between items-center">
						<div className="flex flex-col justify-start space-y-[1.43rem]">
							<svg
								width="165"
								height="173"
								viewBox="0 0 165 173"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z"
									fill="#03B1F0"
								/>
							</svg>

							<div className="text-white text-center">
								<p className="text-[1.75rem] font-medium">Primary Color</p>
								<p className="text-[1.75rem] font-normal">#03B1F0</p>
							</div>
						</div>
						<div className="flex flex-col justify-start space-y-[1.43rem]">
							<svg
								width="165"
								height="173"
								viewBox="0 0 165 173"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z"
									fill="#FECE20"
								/>
							</svg>

							<div className="text-white text-center">
								<p className="text-[1.75rem] font-medium">Secondary Color</p>
								<p className="text-[1.75rem] font-normal">#FECE20</p>
							</div>
						</div>
						<div className="flex flex-col justify-start space-y-[1.43rem]">
							<svg
								width="165"
								height="173"
								viewBox="0 0 165 173"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z"
									fill="#18191F"
								/>
							</svg>

							<div className="text-white text-center">
								<p className="text-[1.75rem] font-medium">Text Color</p>
								<p className="text-[1.75rem] font-normal">#18191F</p>
							</div>
						</div>
						<div className="flex flex-col justify-start space-y-[1.43rem]">
							<svg
								width="165"
								height="173"
								viewBox="0 0 165 173"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z"
									fill="#4D5661"
								/>
							</svg>

							<div className="text-white text-center">
								<p className="text-[1.75rem] font-medium">Text Color</p>
								<p className="text-[1.75rem] font-normal">#4D5661</p>
							</div>
						</div>
						<div className="flex flex-col justify-start space-y-[1.43rem]">
							<svg
								width="165"
								height="173"
								viewBox="0 0 165 173"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M75.2413 0.036042C117.953 -1.28521 153.021 33.9039 163.395 75.3494C172.013 109.786 144.504 138.959 114.927 158.597C89.8377 175.256 57.9849 178.951 33.2631 161.753C6.91941 143.426 -5.64487 111.387 2.41708 80.3291C12.4532 41.6659 35.3083 1.27135 75.2413 0.036042Z"
									fill="white"
								/>
							</svg>

							<div className="text-white text-center">
								<p className="text-[1.75rem] font-medium">BG Color</p>
								<p className="text-[1.75rem] font-normal">#FFFFFF</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-start items-center w-full space-y-7 pt-12 lg:pt-[6.52rem] ">
					<div className="relative flex justify-center items-center text-center w-full mb-4 lg:px-20 ">
						<h2 className="absolute z-20 text-xl lg:text-[2.46rem] font-medium text-white">
							Visual <span className="text-[#03B1F0]">Design </span>
						</h2>
						<div className="absolute z-10 top-px bg-[#49654E] h-4 w-[8.5rem] lg:w-[17.5rem] lg:h-8 rounded-[5.9rem]" />
					</div>
					<div className="w-screen mt-6 lg:pt-[4.8rem] flex flex-col justify-start items-center">
						<Image
							src={visualDesign}
							alt="visual design"
							className="block md:hidden object-center"
						/>
						<Image
							src={visualDesignDesktop}
							alt="visual design"
							className="md:block hidden"
						/>
					</div>
					<div className="w-screen lg:pt-[7.38rem] flex flex-col justify-start items-center">
						<Image
							src={visualDesign2}
							alt="visual design"
							className="block md:hidden"
						/>
						<Image
							src={visualDesignDesktop2}
							alt="visual design"
							className="md:block hidden"
						/>
					</div>
				</div>
				<div className="flex flex-col items-start pt-12 space-y-12 lg:px-20 w-full">
					<div>
						<div className="flex flex-row justify-start items-center space-x-2 w-full mb-4">
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="lg:h-[2.12rem] lg:w-[2.12rem]"
							>
								<circle cx="8" cy="8.51343" r="8" fill="#49654E" />
								<circle cx="8.23575" cy="8.74869" r="6.35294" fill="#49654E" />
								<circle cx="7.99983" cy="8.5135" r="4.70588" fill="#00AFEF" />
							</svg>
							<h3 className="text-white text-base lg:text-[2.12rem] font-['Satoshi-Medium']">
								Results
							</h3>
						</div>
						<ul className="pl-6 py-2 pr-4  lg:px-[3.12rem] rounded-xl list-disc  text-white text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light flex flex-col space-y-1.5 w-full ">
							<li>
								{' '}
								Increased User Satisfaction: The updated design has received
								positive feedback from potential users, with many stating that
								the app is now more user-friendly and visually appealing.
							</li>
							<li>
								Increased Usage: The app's usage will be increased, with many
								users now preferring to use mobile apps over traditional banking
								methods.
							</li>
							<li>
								Improved Brand Image: The updated app will help improve Union
								Bank's image, positioning the bank as a modern, forward-thinking
								financial institution.
							</li>
						</ul>
					</div>
					<div>
						<div className="flex flex-row justify-start items-center space-x-2 w-full mb-4">
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="lg:h-[2.12rem] lg:w-[2.12rem]"
							>
								<circle cx="8" cy="8.51343" r="8" fill="#49654E" />
								<circle cx="8.23575" cy="8.74869" r="6.35294" fill="#49654E" />
								<circle cx="7.99983" cy="8.5135" r="4.70588" fill="#00AFEF" />
							</svg>
							<h3 className="text-white text-base lg:text-[2.12rem] font-['Satoshi-Medium']">
								Conclusion
							</h3>
						</div>
						<p className="text-white text-justify text-base lg:text-[1.62rem] leading-[1.38rem] lg:leading-[2.2rem] font-light lg:pt-[3.12rem] lg:max-w-6xl">
							This personal design project was a great opportunity to explore
							the potential improvements to Union Bank's mobile banking app. The
							updated design addressed the key pain points and provided a more
							user-friendly and visually appealing experience. Although this
							design project was not implemented, it serves as a valuable
							reference for future design projects and highlights the potential
							benefits of a well-designed mobile banking app.
						</p>
					</div>
				</div>
				<div className="w-full flex justify-center items-center py-5 lg:py-[6.25rem]">
					<Image
						src={unionBankFooter}
						alt="unionBankFooter"
						className="lg:w-[63.13rem] lg:h-[18.18rem]"
					/>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default UnionBank;
