import React from "react";

const SingleProduct = (props) => {
	const { name, imgUrl, description, price } = props.product;

	return (
		<>
			{/* single product */}
			<div className="border w-full lg:mb-0 mb-8 shadow-lg md:mx-0 mx-1">
				<div className="pt-5">
					<img
						src={imgUrl}
						alt="product_image"
						className="w-auto mx-auto h-60"
					/>
				</div>
				<div className="bg-white">
					<div className="py-5 px-7">
						<div className="flex items-center">
							<h2 className="text-lg font-semibold">{name}</h2>
						</div>
						<p className="text-xs text-gray-600 mt-2">{description}</p>
						<div className="flex mt-4">
							<div>
								<p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
									12 months warranty
								</p>
							</div>
							<div className="pl-2">
								<p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
									Complete box
								</p>
							</div>
						</div>
						<div className="flex items-center justify-between py-4">
							<h2 className="text-gray-700 text-xs font-semibold">
								Bay Area, San Francisco
							</h2>
							<h3 className="text-gray-700 text-xl font-semibold">${price}</h3>
						</div>
						<div className="mt-4">
							<div className="text-center">
								<button className="text-base text-black px-3 bg-gray-100 hover:text-white hover:bg-black hover:border-black transition-all ease-in-out duration-300 border py-1 rounded">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* single product */}
		</>
	);
};

export default SingleProduct;
