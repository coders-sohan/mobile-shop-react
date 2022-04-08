import React from "react";
import AboutSec from "../../components/AboutSec/AboutSec";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurPartner from "../Home/OurPartner";

const AboutPage = () => {
	return (
		<>
			<Navbar />
			<AboutSec />
			<OurPartner />
			<Footer />
		</>
	);
};

export default AboutPage;
