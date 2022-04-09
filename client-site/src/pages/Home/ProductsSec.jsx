import React from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const ProductsSec = () => {
	return (
		<>
			<div className="bg-white">
				<div className="mx-auto container">
					<div className="pt-8">
						<h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">
							Our Products
						</h1>
					</div>
					<div className="grid lg:gap-6 gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-12">
						<SingleProduct />
						<SingleProduct />
						<SingleProduct />
						<SingleProduct />
						<SingleProduct />
						<SingleProduct />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductsSec;
