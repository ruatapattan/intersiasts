// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import dnd from "../img/dnd.jpg";
import grow from "../img/grow.jpg";
import chess from "../img/chess.jpg";
import brew from "../img/brew.jpg";
import "../Carousel.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const imgArr = [dnd, grow, chess, brew];

function Carousel() {
	const [imgIdx, setImgIdx] = useState(0);

	const settings = {
		// arrows: true,
		infinite: true,
		// lazyLoad: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		beforeChange: (cur, next) => setImgIdx(next),
	};
	return (
		<Slider {...settings} className="carouselBox">
			{imgArr.map((item, idx) => (
				<div key={idx} className={idx === imgIdx ? "slide activeSlide" : "slide"}>
					<img className="image" src={item} alt={item} />
				</div>
			))}
		</Slider>
	);
}

export default Carousel;
