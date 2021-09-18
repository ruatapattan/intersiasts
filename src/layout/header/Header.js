import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
function Header() {
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
						<li className="here">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/browse">Browse</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/login">Log In</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}

export default Header;
