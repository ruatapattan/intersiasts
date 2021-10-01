import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

function Index() {
	return (
		<>
			<div className="tophalf">
				{/* <!-- section1: intro --> */}
				{/* <!-- set background in css --> */}
				<section className="intro index">
					<div className="container section innerIntro">
						<h1>Are you into something that no one around is?</h1>
						<h3>Discover new friends who share the very same interests as you</h3>
						<h3>Become part of passion fueled communities</h3>
						<h3>For enthusiasts by enthusiasts</h3>
						<h2>Become an Intersiast now</h2>
						<button className="btn">
							<Link to="/signup">Join</Link>
						</button>
					</div>
				</section>
			</div>

			{/* <!-- section2: slide --> */}
			<section className="index darkbg">
				<div className="container section bottomhalf">
					<h1>Why not look around?</h1>
					<Carousel />
					<button className="btn">
						<Link to="/browse">Browse</Link>
					</button>
				</div>
			</section>
		</>
	);
}

export default Index;

// import Carousel from "../components/Carousel";

// function Home() {
// 	return (
// 		<div className="navSpace" style={{ width: "1000px" }}>
// 			{/* <Carousel /> */}
// 		</div>
// 	);
// }

// export default Home;
