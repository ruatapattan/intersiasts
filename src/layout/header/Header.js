import logo from "../../img/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useHeaderHere } from "../../contexts/HeaderHereContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { removeToken } from "../../services/localstorage";
import { BellFill, PersonFill } from "react-bootstrap-icons";
import axios from "../../config/axios";

function Header() {
	const history = useHistory();
	const { here } = useHeaderHere();
	const { userRole, user, setUser, setUserRole } = useContext(AuthContext);
	// console.log(user);

	const [clickedProfile, setClickedProfile] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	const handleClickSignOut = async (e) => {
		e.preventDefault();
		removeToken();
		setUser(null);
		setUserRole("guest");
		setClickedProfile((cur) => !cur);
		history.push("/");
	};

	useEffect(() => {
		const fetch = async () => {
			const result = await axios.get(`/profile/${user?.id}`);
			setUserInfo(result?.data?.userProfile);
		};
		fetch();
	}, []);

	console.log(userInfo?.profilePic?.secure_url);

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
								<li className="iconNav">
									<Link to="">
										<BellFill />
									</Link>
								</li>

								<li className="userPic">
									<Link to="#" onClick={() => setClickedProfile((cur) => !cur)}>
										{userInfo?.profilePic !== null ? (
											<img src={userInfo?.profilePic?.secure_url} alt="" />
										) : (
											<PersonFill
												style={{
													fontSize: "30px",
													background: "slateBlue",
													borderRadius: "50%",
													width: "100%",
													height: "100%",
												}}
											/>
										)}
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</header>
			{clickedProfile && (
				<div
					style={{
						position: "fixed",
						right: 0,
						backgroundColor: "rgba(35, 39, 42, 0.4)",
						border: "1px solid slateGrey",
						borderRadius: "5px",
						width: "15%",
						height: "20%",
						top: "10vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "flex-start",
						// alignItems: "center",
					}}
				>
					<Link
						style={{ margin: "0.4rem" }}
						to="/createCommunity"
						onClick={() => setClickedProfile((cur) => !cur)}
					>
						Create Community
					</Link>
					<Link
						style={{ margin: "0.4rem" }}
						to={`/profile/${user.id}`}
						onClick={() => setClickedProfile((cur) => !cur)}
					>
						My Profile
					</Link>
					<Link style={{ margin: "0.4rem" }} to="" onClick={handleClickSignOut}>
						Sign Out
					</Link>
				</div>
			)}
		</>
	);
}

export default Header;
