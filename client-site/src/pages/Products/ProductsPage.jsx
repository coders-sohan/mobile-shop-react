import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import NewsLetter from "../Home/NewsLetter";

const ProductsPage = () => {
	return (
		<>
			<Navbar />
			<div className="bg-white">
				<div className="mx-auto container">
					<div className="pt-8">
						<h1 class="md:text-5xl text-3xl font-bold text-center text-gray-800">
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
			<NewsLetter />
			<Footer />
		</>
	);
};

export default ProductsPage;
