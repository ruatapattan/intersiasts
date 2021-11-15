import { Link } from "react-router-dom";
import dnd from "../img/dnd.jpg";

function ExpSlide() {
	return (
		<section className="expslideContainer darkbg">
			<h3>Your Communities</h3>
			<div className="container expslide">
				<Link to="/community/1">
					<img src={dnd} alt="" />
				</Link>
				<Link to="/">
					<img src="./img/chess.jpg" alt="" />
				</Link>
				<Link to="/">
					<img src="./img/model.jpg" alt="" />
				</Link>
				<Link to="/">
					<img src="./img/brew.jpg" alt="" />
				</Link>
				<Link to="/">
					<img src="./img/knit.jpg" alt="" />
				</Link>
			</div>
		</section>
	);
}

export default ExpSlide;
