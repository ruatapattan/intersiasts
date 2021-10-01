import dnd from "../img/dnd.jpg";
import grow from "../img/grow.jpg";
import chess from "../img/chess.jpg";
import brew from "../img/brew.jpg";
import water from "../img/water.jpg";
import hops from "../img/hops.jpg";
import knit from "../img/knit.jpg";
import mixology from "../img/mixology.jpg";
import winebrew from "../img/winebrew.jpg";
import coding from "../img/coding.jpg";
import "../ExpSlide.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgArr = [dnd, grow, chess, brew, water, hops, knit, mixology, winebrew, coding];

function ExpSlide(props) {
	const settings = {
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
	};
	return (
		<section className="expSlideContainer">
			{/* <h3>{props.title ?? "you forgot"}</h3> */}
			<h3>{"your community"}</h3>
			<Slider {...settings} className="expSlideBox">
				{imgArr.map((item, idx) => (
					<div className="expSlider">
						<img className="expImage" src={item} alt={item} />
					</div>
				))}
			</Slider>
		</section>
	);
}

export default ExpSlide;
