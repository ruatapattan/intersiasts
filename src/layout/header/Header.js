import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useHeaderHere } from "../../components/contexts/HeaderHereContext";

function Header() {
	const { here } = useHeaderHere();

	return (
		<>
			<header className="headerPic">
				<div className="container header">
					<div className="logo head">
						<img src={logo} alt="logo" className="logoimg" />
					</div>
					<div className="searchBar head">
						<input type="text" placeholder="Search.." name="search" className="textInput" />
						<button className="btn srchbtn">Search</button>
					</div>
					<ul className="navbar head">
						<li className={here === "/" ? `here` : ""}>
							<Link to="/">Home</Link>
						</li>
						<li className={here === "/browse" ? `here` : ""}>
							<Link to="/browse">Browse</Link>
						</li>
						<li className={here === "/signup" ? `here` : ""}>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li className={here === "/login" ? `here` : ""}>
							<Link to="/login">Log In</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}

export default Header;
