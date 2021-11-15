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
	const [searchKeyword, setSearchKeyword] = useState("");
	console.log(userRole);
	const [searchedCommunitiesList, setSearchedCommunitiesList] = useState([]);
	const [clickedProfile, setClickedProfile] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [showSearchResult, setShowSearchResult] = useState(false);

	const handleClickSignOut = async (e) => {
		e.preventDefault();
		removeToken();
		setUser(null);
		setUserRole("guest");
		setClickedProfile((cur) => !cur);
		history.push("/");
		window.location.reload();
	};

	useEffect(() => {
		if (userRole !== "guest") {
			const fetch = async () => {
				console.log("effect");
				const result = await axios.get(`/profile/${user.id}`);
				setUserInfo(result?.data?.userProfile);
			};
			fetch();
		}
	}, []);

	const handleClickSearch = async (e) => {
		const found = await axios.get(`http://localhost:8080/community/search/name/${searchKeyword}`);
		setSearchedCommunitiesList(found.data.foundCommunities);
		setShowSearchResult((cur) => !cur);
	};

	const handleClickToSearchedCommunity = (communityId) => {
		history.push(`/community/${communityId}`);
		window.location.reload();
	};

	const handleChangeSearchInput = (e) => {
		setSearchKeyword(e.target.value);
		if (!e.target.value) {
			setShowSearchResult(false);
		}
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
					{userRole !== "guest" && (
						<div className="searchBar head">
							<input
								type="text"
								placeholder="Search communities.."
								name="search"
								className="textInput"
								value={searchKeyword}
								onChange={handleChangeSearchInput}
							/>
							<button type="button" className="btn srchbtn" onClick={handleClickSearch}>
								Search
							</button>
							{showSearchResult && (
								<ul
									style={{
										border: "1px solid white",
										backgroundColor: "rgba(35, 39, 42)",
										border: "1px solid slateGrey",
										borderRadius: "5px",
										position: "absolute",
										minWidth: "30%",
										top: "6vh",
									}}
								>
									{searchedCommunitiesList?.map((item) => (
										<li
											className="searchedItem"
											style={{
												display: "flex",
												justifyItems: "center",
												alignItems: "center",
												margin: "1rem",
												boxSizing: "border-box",
												borderBottom: "1px solid white",
												padding: "0.5rem",
												cursor: "pointer",
											}}
											onClick={() => handleClickToSearchedCommunity(item?.id)}
										>
											<img
												style={{ width: "50px", height: "50px" }}
												src={item?.communityImage?.secure_url}
											/>
											<p style={{ marginLeft: "1rem", textAlign: "left" }}>
												{item?.communityName}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
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
						padding: "1rem",
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
						zIndex: 100,
						// alignItems: "center",
					}}
				>
					<Link
						className="searchedItem"
						style={{ margin: "0.4rem", width: "100%" }}
						to="/createCommunity"
						onClick={() => setClickedProfile((cur) => !cur)}
					>
						Create Community
					</Link>
					<Link
						className="searchedItem"
						style={{ margin: "0.4rem", width: "100%" }}
						to={`/profile/${user.id}`}
						onClick={() => setClickedProfile((cur) => !cur)}
					>
						My Profile
					</Link>
					<Link
						className="searchedItem"
						style={{ margin: "0.4rem", width: "100%" }}
						onClick={handleClickSignOut}
					>
						Sign Out
					</Link>
				</div>
			)}
		</>
	);
}

export default Header;
