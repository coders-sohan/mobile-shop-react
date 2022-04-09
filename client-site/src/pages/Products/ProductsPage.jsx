import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import NewsLetter from "../Home/NewsLetter";

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const url = "https://mobile-shop-react.herokuapp.com/products";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<Navbar />
			<div className="bg-white">
				<div className="mx-auto container">
					<div className="pt-8">
						<h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">
							Our Products
						</h1>
					</div>
					<div className="grid lg:gap-6 gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-12">
						{products.map((product) => (
							<SingleProduct key={product._id} product={product} />
						))}
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</>
	);
};

export default ProductsPage;
