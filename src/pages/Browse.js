import Carousel from "../components/Carousel";
import ExpSlide from "../components/ExpSlide";

function Browse() {
	return (
		<>
			{/* <!-- section1: slide --> */}
			<section>
				<div className="container section bottomhalf navSpace">
					<h1>Recommended Communities</h1>
					<Carousel />
				</div>
			</section>

			{/* <!-- section2: my communities --> */}
			<ExpSlide />

			{/* <!-- section3: filter communities -->*/}
			<ExpSlide />

			{/* <!-- section4: cuz you joined --> */}
			<ExpSlide />
		</>
	);
}

export default Browse;
