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
import { useContext, useState } from "react";

import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const imgArr = [dnd, grow, chess, brew];

function Carousel({ communities }) {
	const { userRole } = useContext(AuthContext);
	const history = useHistory();
	const [imgIdx, setImgIdx] = useState(0);
	console.log(communities);
	// communities.forEach((item) => console.log(item.communityImage));
	// console.log("imgIdx", imgIdx);

	const settings = {
		// arrows: true,
		infinite: true,
		// lazyLoad: true,
		speed: 1000,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		beforeChange: (cur, next) => setImgIdx(next),
	};

	const handleClickCommunityPopup = async (selectedCommunity) => {
		console.log(selectedCommunity);

		const tags = selectedCommunity?.CommunityTags?.map((item) => item?.Tag?.tagName).join(", ");

		const visit = await Swal.fire({
			title: selectedCommunity?.communityName,
			text: `Tags: ${tags}`,
			imageUrl: selectedCommunity?.communityImage?.secure_url,
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
			if (userRole !== "guest") {
				history.push(`/community/${selectedCommunity.id}`);
			} else {
				history.push(`/signup`);
			}
		}
	};

	return (
		<Slider {...settings} className="carouselBox" style={{ cursor: "pointer" }}>
			{communities?.map((item, idx) => (
				<div key={idx} className={idx === imgIdx ? "slide activeSlide" : "slide"}>
					<img
						className="image"
						src={item?.communityImage?.secure_url}
						alt={item}
						onClick={() => handleClickCommunityPopup(item)}
						value={item}
					/>
				</div>
			))}
			{/* {imgArr.map((item, idx) => (
				<div key={idx} className={idx === imgIdx ? "slide activeSlide" : "slide"}>
					<img className="image" src={item} alt={item} />
				</div>
			))} */}
		</Slider>
	);
}

export default Carousel;
