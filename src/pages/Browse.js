import { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Carousel from "../components/Carousel";
import ExpSlide from "../components/ExpSlide";
import axios from "../config/axios";
import { AuthContext } from "../contexts/AuthContext";
import { ToggleOff, ToggleOn } from "react-bootstrap-icons";
function Browse() {
	const { user, userRole } = useContext(AuthContext);
	const [allCommunityInfo, setAllCommunityInfo] = useState([]);
	const [joinedCommunityList, setJoinedCommunityList] = useState([]);
	const [filteredCommunityList, setFilteredCommunityList] = useState([]);
	const [tagList, setTagList] = useState([]);
	const [toggleView, setToggleView] = useState("slide");

	const history = useHistory();

	const randomSort = (a, b) => {
		return 0.5 - Math.random();
	};

	useEffect(() => {
		const fetch = async () => {
			const result = await axios.get("/community/browse/all");
			// console.log(result.data.communities);
			// console.log(result.data.communities.sort(randomSort));
			setAllCommunityInfo(result.data.communities);

			//fetch joined only
			if (userRole !== "guest") {
				const joinedCommunity = await axios.get(`/community/browse/${user.id}/joined`);
				// console.log("joined inside", joinedCommunity);
				setJoinedCommunityList(joinedCommunity.data.joinedCommunities);
			}
			const tagResult = await axios.get("http://localhost:8080/createCommunity");
			setTagList([...tagResult.data.tags]);
		};
		fetch();
	}, []);

	//random communities
	const randomed = [...allCommunityInfo].sort(randomSort);
	// console.log("original", allCommunityInfo);
	// console.log("randomed", randomed);

	const handleChangeFilterByTag = async (e) => {
		const filtered = await axios.get(`/community/browse/tag/${e.target.value}`);
		console.log("filtered", filtered.data.filteredCommunities);
		setFilteredCommunityList(filtered?.data?.filteredCommunities);
	};

	const handleClickCommunityPopup = async (selectedCommunity) => {
		console.log("selected", selectedCommunity);
		// let placeholder;

		const tags = selectedCommunity?.CommunityTags.map((item) => item?.Tag?.tagName).join(", ");

		// const tags = selectedCommunity?.CommunityTags?.map((item) => item?.Tag?.tagName).join(", ");

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
			history.push(`/community/${selectedCommunity?.Community?.id}`);
		}
	};

	console.log("all info", allCommunityInfo);
	const toUse = allCommunityInfo.map((item) => ({ Community: item }));

	// console.log(allCommunityInfo);
	// console.log(allCommunityInfo.sort(() => Math.random() - 0.5));

	return (
		<>
			{/* <!-- section1: slide --> */}
			<section>
				<div className="container section bottomhalf navSpace">
					<h1>Recommended Communities</h1>
					<br />
					<Carousel communities={randomed} />
				</div>
			</section>

			{/* <!-- section2: my communities --> */}
			{userRole !== "guest" && <ExpSlide joinedCommunityList={joinedCommunityList} title="Communities Joined" />}
			{/* <!-- section3: filter communities -->*/}
			<div>
				<div
					style={{ marginLeft: "1rem", display: "flex", alignItems: "center", justifyContent: "flex-start" }}
				>
					<h3>Filter Communities By Tag</h3>
					<select
						style={{ marginLeft: "1rem" }}
						className="communityTagFrame"
						onChange={handleChangeFilterByTag}
					>
						<option defaultValue="true" value="placeHolder">
							Select tag
						</option>
						{tagList?.map((item) => (
							<option
								key={item.id}
								value={item.id}
								className="tagOption"
								style={{
									background: "#23272a",
								}}
							>
								{item?.tagName}
							</option>
						))}
					</select>
				</div>
				<ExpSlide title="Filtered Communities Result:" joinedCommunityList={filteredCommunityList} />
			</div>

			{/* <!-- section4: cuz you joined --> */}

			<div style={{ display: "flex", alignItems: "center" }}>
				<h3 style={{ marginLeft: "1rem", marginRight: "1rem" }}>All Communities</h3>
				<div style={{ display: "flex", alignItems: "center" }}>
					{toggleView === "slide" ? (
						<>
							<h3 style={{ marginRight: "1rem" }}>View: Slide</h3>
							<ToggleOff fontSize="2rem" onClick={() => setToggleView("grid")} />
						</>
					) : (
						<>
							<h3 style={{ marginRight: "1rem" }}>View: Grid</h3>
							<ToggleOn fontSize="2rem" color="slateBlue" onClick={() => setToggleView("slide")} />
						</>
					)}
				</div>
			</div>
			{toggleView === "slide" ? (
				<ExpSlide joinedCommunityList={toUse} title="" />
			) : (
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<div
						className="expSlideBox"
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
							width: "80%",
							textAlign: "center",
						}}
					>
						{allCommunityInfo?.map((item, idx) => (
							// <p style={{ marginRight: "1rem" }}>bnjklhjkl;hjklhjk </p>

							<Link
								to="#"
								onClick={() => handleClickCommunityPopup(item)}
								className="expSlider"
								key={idx}
								style={{ width: "200px", height: "200px", margin: "1rem 1rem" }}
							>
								<img
									className="expImage"
									onClick={() => handleClickCommunityPopup(item)}
									src={item?.communityImage?.secure_url}
								/>
							</Link>

							// 	<img className="expImage" src={item?.Community?.communityImage?.secure_url} alt="" />
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default Browse;
