import React, { useState } from "react";

const FAQs = () => {
	const [box1, setBox1] = useState(false);
	const [box2, setBox2] = useState(false);
	const [box3, setBox3] = useState(false);
	const [box4, setBox4] = useState(false);

	return (
		<>
			<div className="bg-gray-50 mt-16">
				<div>
					<div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-20">
						<div class="md:py-12 py-6">
							<h1 class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-black">
								Frequently asked questions
							</h1>
						</div>
						<div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
							<div
								class="bg-white shadow rounded p-8 cursor-pointer"
								onClick={() => setBox1(!box1)}
							>
								<div class="flex items-center justify-between">
									<div>
										<h2 class="text-base font-semibold leading-none text-gray-800">
											Why should I use your service?
										</h2>
									</div>
									<button
										onClick={() => setBox1(!box1)}
										class="focus:outline-none cursor-pointer"
									>
										{box1 ? (
											<svg
												role="button"
												aria-label="close dropdown"
												width="10"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 5L5 1L9 5"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										) : (
											<svg
												width="10"
												role="button"
												aria-label="open dropdown"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L5 5L9 1"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										)}
									</button>
								</div>

								{box1 && (
									<ul class="">
										<li>
											<p class="text-base leading-normal text-gray-600 mt-4">
												If you want to choose Pro or Business plan the you can
												use all payments. You can pay from Paypal, Payoneer,
												Master Card, Debit Card.
											</p>
										</li>
									</ul>
								)}
							</div>
							<div
								class="bg-white shadow rounded p-8 cursor-pointer mt-8"
								onClick={() => {
									setBox2(!box2);
								}}
							>
								<div class="flex items-center justify-between">
									<div>
										<h2 class="text-base font-semibold leading-none text-gray-800">
											What payment method I can use?
										</h2>
									</div>
									<button
										onClick={() => {
											setBox2(!box2);
										}}
										data-menu
										class="focus:outline-none cursor-pointer"
									>
										{box2 ? (
											<svg
												role="button"
												aria-label="close dropdown"
												width="10"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 5L5 1L9 5"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										) : (
											<svg
												width="10"
												role="button"
												aria-label="open dropdown"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L5 5L9 1"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										)}
									</button>
								</div>
								{box2 && (
									<ul>
										<li>
											<p class="text-base leading-normal text-gray-600 mt-4">
												If you want to choose Pro or Business plan the you can
												use all payments. You can pay from Paypal, Payoneer,
												Master Card, Debit Card.
											</p>
										</li>
									</ul>
								)}
							</div>
							<div
								class="bg-white shadow rounded p-8 cursor-pointer mt-8"
								onClick={() => {
									setBox3(!box3);
								}}
							>
								<div class="flex items-center justify-between">
									<div>
										<h2 class="text-base font-semibold leading-none text-gray-800">
											Is your service safe to use?
										</h2>
									</div>
									<button
										onClick={() => {
											setBox3(!box3);
										}}
										data-menu
										class="focus:outline-none cursor-pointer"
									>
										{box3 ? (
											<svg
												role="button"
												aria-label="close dropdown"
												width="10"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 5L5 1L9 5"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										) : (
											<svg
												width="10"
												role="button"
												aria-label="open dropdown"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L5 5L9 1"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										)}
									</button>
								</div>
								{box3 && (
									<ul>
										<li>
											<p class="text-base leading-normal text-gray-600 mt-4">
												If you want to choose Pro or Business plan the you can
												use all payments. You can pay from Paypal, Payoneer,
												Master Card, Debit Card.
											</p>
										</li>
									</ul>
								)}
							</div>
							<div
								class="bg-white shadow rounded p-8 cursor-pointer mt-8 cursor-pointer"
								onClick={() => setBox4(!box4)}
							>
								<div class="flex items-center justify-between">
									<div>
										<h2 class="text-base font-semibold leading-none text-gray-800">
											How to recover password?
										</h2>
									</div>
									<button
										onClick={() => setBox4(!box4)}
										data-menu
										class="focus:outline-none cursor-pointer"
									>
										{box4 ? (
											<svg
												role="button"
												aria-label="close dropdown"
												width="10"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 5L5 1L9 5"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										) : (
											<svg
												width="10"
												role="button"
												aria-label="open dropdown"
												height="6"
												viewBox="0 0 10 6"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L5 5L9 1"
													stroke="#4B5563"
													stroke-width="1.5"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										)}
									</button>
								</div>
								{box4 && (
									<ul>
										<li>
											<p class="text-base leading-normal text-gray-600 mt-4">
												If you want to choose Pro or Business plan the you can
												use all payments. You can pay from Paypal, Payoneer,
												Master Card, Debit Card.
											</p>
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQs;
