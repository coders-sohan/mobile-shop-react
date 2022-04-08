import React from "react";
import { Link } from "react-router-dom";

const HeroSec = () => {
	return (
		<>
			<div className="bg-gray-900">
				<div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
					<div className="z-30 relative lg:w-1/2">
						<div className="hidden bg-gray-800 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
							<div className="w-full lg:w-auto lg:-mr-32">
								<img
									src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="hero"
									className="w-full relative z-30 lg:pl-20 px-6 py-14"
								/>
							</div>
						</div>
						<div className="absolute top-0 bg-gray-800 md:h-96 w-full hidden md:block lg:hidden"></div>
						<div className="w-full h-full lg:hidden">
							<img
								src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="hero"
								className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
							/>
						</div>
					</div>
					<div className=" bg-gray-800lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
						<div>
							<h1 className="text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold capitalize">
								Galaxy S20, S20+ and S20 Ultra 5G
							</h1>
							<p className="text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal mt-5 space-y-4">
								With 8K Video and 8K Video Snap, Galaxy S20, S20+ and S20 Ultra
								change how you capture video and photos. And 5G changes how you
								share.
							</p>
							<button className="bg-white hover:bg-gray-300 hover:text-gray-900 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none transition duration-300 ease-in-out font-medium leading-none text-black py-4 px-8 flex items-center">
								<Link to="/products">Explore now</Link>
								<div className="ml-2 mt-0.5">
									<svg
										className="fill-stroke"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.33325 8H12.6666"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M10 10.6667L12.6667 8"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M10 5.33301L12.6667 7.99967"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSec;
