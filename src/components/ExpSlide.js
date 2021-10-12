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
import { Link } from "react-router-dom";

// const imgArr = [dnd, grow, chess, brew, water, hops, knit, mixology, winebrew, coding];

function ExpSlide({ title, userCommunities }) {
	console.log(userCommunities);
	userCommunities?.forEach((item) => console.log(item.communityImage));

	const slidesToShow = userCommunities?.length < 5 ? userCommunities?.length : 5;
	const slidesToScroll = userCommunities?.length < 5 ? userCommunities?.length : 5;

	const settings = {
		infinite: true,
		speed: 300,
		slidesToShow,
		slidesToScroll,
	};
	return (
		<section className="expSlideContainer">
			<h3>{title ?? "Your Community"}</h3>
			<Slider {...settings} className="expSlideBox">
				{userCommunities?.map((item, idx) => (
					<Link to={`/community/${item.communityId}`} className="expSlider" key={idx}>
						<img className="expImage" src={item?.communityImage} alt="" />
					</Link>
				))}
				{/* {imgArr.map((item, idx) => (
					<div className="expSlider" key={idx}>
						<img className="expImage" src={item} alt="" />
					</div>
				))} */}
			</Slider>
		</section>
	);
}

export default ExpSlide;
