import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutSec from "../../components/AboutSec/AboutSec";
import HeroSec from "./HeroSec";
import NewsLetter from "./NewsLetter";
import OurPartner from "./OurPartner";
import ProductsSec from "./ProductsSec";

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSec />
			<AboutSec />
			<ProductsSec />
			<NewsLetter />
			<OurPartner />
			<Footer />
		</>
	);
};

export default Home;
