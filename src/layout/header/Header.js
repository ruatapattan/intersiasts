import logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useHeaderHere } from "../../contexts/HeaderHereContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { removeToken } from "../../services/localstorage";

function Header() {
	const history = useHistory();
	const { here } = useHeaderHere();
	const { userRole, user, setUser, setUserRole } = useContext(AuthContext);
	console.log(user);

	const handleClickSignOut = async (e) => {
		e.preventDefault();
		removeToken();
		setUser(null);
		setUserRole("guest");
		history.push("/");
	};

	return (
		<>
			<header className="headerPic">
				<div className="container header">
					<div className="logo head">
						<Link to="/">
							<img src={logo} alt="logo" className="logoimg" />
						</Link>
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
						{userRole === "guest" ? (
							<>
								<li className={here === "/signup" ? `here` : ""}>
									<Link to="/signup">Sign Up</Link>
								</li>
								<li className={here === "/login" ? `here` : ""}>
									<Link to="/login">Log In</Link>
								</li>
							</>
						) : (
							<>
								<li className={here === "/login" ? `here` : ""}>
									<Link to="" onClick={handleClickSignOut}>
										Sign Out
									</Link>
								</li>
								<li className="userPic">
									<Link to={`/profile/${user.id}`}>
										<img src="./img/pfpic.png" alt="" />
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</header>
		</>
	);
}

export default Header;
