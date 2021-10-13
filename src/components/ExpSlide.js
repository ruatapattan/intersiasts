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
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// const imgArr = [dnd, grow, chess, brew, water, hops, knit, mixology, winebrew, coding];

function ExpSlide({ title, joinedCommunityList }) {
	const history = useHistory();
	console.log(joinedCommunityList);

	const slidesToShow = joinedCommunityList?.length < 5 ? joinedCommunityList?.length : 5;
	const slidesToScroll = joinedCommunityList?.length < 5 ? joinedCommunityList?.length : 5;

	const settings = {
		infinite: true,
		speed: 300,
		slidesToShow,
		slidesToScroll,
	};

	const handleClickCommunityPopup = async (selectedCommunity) => {
		console.log("selected", selectedCommunity);
		// let placeholder;

		const tags = selectedCommunity?.Community?.CommunityTags.map((item) => item?.Tag?.tagName).join(", ");

		// const tags = selectedCommunity?.CommunityTags?.map((item) => item?.Tag?.tagName).join(", ");

		const visit = await Swal.fire({
			title: selectedCommunity?.Community?.communityName,
			text: `Tags: ${tags}`,
			imageUrl: selectedCommunity?.Community?.communityImage?.secure_url,
			imageWidth: "20rem",
			imageHeight: "20rem",
			background: "#23272a",
			showCancelButton: true,
			confirmButtonColor: "slateBlue",
			cancelButtonColor: "#23272a",
			confirmButtonText: "Visit Community",
			cancelButtonText: "Maybe later",
			customClass: {
				htmlContainer: "whiteText",
				title: "whiteText",
			},
		});
		if (visit.isConfirmed) {
			history.push(`/community/${selectedCommunity?.Community?.id}`);
		}
	};

	// to={`/community/${item.id}`}
	return (
		<section className="expSlideContainer">
			<h3>{title ?? "Your Community"}</h3>
			<Slider {...settings} className="expSlideBox">
				{joinedCommunityList?.map((item, idx) => (
					<Link to="#" onClick={() => handleClickCommunityPopup(item)} className="expSlider" key={idx}>
						<img className="expImage" src={item?.Community?.communityImage?.secure_url} alt="" />
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
