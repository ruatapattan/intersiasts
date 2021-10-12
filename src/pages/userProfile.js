import { useEffect, useState } from "react";
import ExpSlide from "../components/ExpSlide";
import SideBarL from "../components/sidebars/SideBarL";
import SideBarR from "../components/sidebars/SideBarR";
import axios from "../config/axios";
import { Link, useParams } from "react-router-dom";
import { user } from "../services/localstorage";
import { PencilSquare, PersonFill } from "react-bootstrap-icons";
import validator from "validator";
import passwordValidate from "../services/passwordValidate";
import Swal from "sweetalert2";

// import PopupContainer from "../components/sidebars/PopupContainer";

//check if user is the owner of this profile via useparam and compare with token id

function UserProfile() {
	const [userInfo, setUserInfo] = useState({});
	const [profilePicToShow, setProfilePicToShow] = useState(null);
	const [userCommunities, setUserCommunities] = useState([]);
	const [currentSideBarNav, setCurrentSideBarNav] = useState("profile");
	const [editProfileInput, setEditProfileInput] = useState({
		profilePic: null,
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [passwordError, setPasswordError] = useState("");
	const [passwordConfirmError, setPasswordConfirmError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [imageError, setImageError] = useState("");
	const params = useParams();

	useEffect(() => {
		const fetch = async () => {
			const result = await axios.get(`/profile/${params.id}`);
			setUserInfo(result.data.userProfile);
		};
		fetch();
	}, []);

	useEffect(() => {
		setUserCommunities(
			userInfo?.CommunityMembers?.map((item) => ({
				communityId: item?.Community?.id,
				communityImage: item?.Community?.communityImage?.secure_url,
			}))
		);
	}, [userInfo]);

	useEffect(() => {
		setProfilePicToShow(userInfo?.profilePic?.secure_url);
	}, [userInfo?.profilePic]);

	console.log(profilePicToShow);

	// console.log("userInfo", userInfo);
	// // console.log("cpics", userCommunities);
	// console.log(currentSideBarNav);

	// //pfp
	// console.log(userInfo?.profilePic);

	//access community img url:
	const handleChangeImage = (e) => {
		e.preventDefault();
		setEditProfileInput((cur) => ({ ...cur, profilePic: e.target.files[0] }));

		if (!e.target.files[0].type.includes("image/")) {
			setImageError("must be an image file");
		} else {
			setImageError("");
			setProfilePicToShow(URL?.createObjectURL(e.target.files[0]));
		}
	};

	const handleChangeEmail = (e) => {
		setEditProfileInput((cur) => ({ ...cur, email: e.target.value }));
		if (!validator.isEmail(editProfileInput.email)) {
			setEmailError("invalid email format");
		} else {
			setEmailError("");
		}
	};

	// useEffect(() => {
	// 	console.log(imageError);
	// }, [imageError]);

	const handleChangePassword = (e) => {
		setEditProfileInput((cur) => ({ ...cur, password: e.target.value }));

		if (e.target.value === "") {
			setPasswordError("");
		} else if (e.target.value === "" && editProfileInput.confirmPassword === "") {
			setPasswordConfirmError("");
		} else if (!passwordValidate.validateCharacter(e.target.value)) {
			setPasswordError("password must contain small letter, capitalized letter, and number");
		} else if (!passwordValidate.validateLength(e.target.value)) {
			setPasswordError("password must be at least 8 characters long");
		} else {
			setPasswordError("");
		}
	};

	const handleChangeConfirmPassword = (e) => {
		setEditProfileInput((cur) => ({ ...cur, confirmPassword: e.target.value }));

		if (editProfileInput.password !== e.target.value) {
			setPasswordConfirmError("confirm password does not match!");
		} else {
			setPasswordConfirmError("");
		}
	};

	const handleClickCancelEdit = () => {
		setEditProfileInput({
			profilePic: null,
			email: "",
			password: "",
			confirmPassword: "",
		});
		setEmailError("");
		setPasswordError("");
		setPasswordConfirmError("");
		setCurrentSideBarNav("profile");
	};
	const handleSubmitEditProfile = async (e) => {
		e.preventDefault();
		if (emailError === "" && passwordError === "" && passwordConfirmError === "" && imageError === "") {
			if (
				editProfileInput.email === "" &&
				editProfileInput.password === "" &&
				editProfileInput.profilePic === null
			) {
				console.log("hii");
				Swal.fire({
					title: "You didn't change anything.",
					background: "#23272a",
					customClass: {
						htmlContainer: "whiteText",
						title: "whiteText",
					},
				});
			} else {
				console.log("hii");
				const formData = new FormData();
				if (editProfileInput.email !== "") {
					formData.append("email", editProfileInput.email);
				}
				if (editProfileInput.password !== "") {
					formData.append("password", editProfileInput.password);
				}
				if (editProfileInput.profilePic !== null) {
					formData.append("cloudinput", editProfileInput.profilePic);
				}
				const edited = await axios.put(`/profile/${params.id}/edit`, formData);
				const done = await Swal.fire({
					title: "change successful.",
					background: "#23272a",
					customClass: {
						htmlContainer: "whiteText",
						title: "whiteText",
					},
				});
				if (done.isConfirmed) window.location.reload();
			}
		}
	};

	// console.log("editProfileInput", editProfileInput);
	// console.log("new pic", editProfileInput?.profilePic?.type);
	// console.log(editProfileInput?.profilePic?.type?.includes("image/"));

	return (
		<>
			<section style={{ height: "100%" }}>
				<div className="container compartment navSpace" style={{ height: "100%", minHeight: "90vh" }}>
					<SideBarL setCurrentSideBarNav={setCurrentSideBarNav} currentSideBarNav={currentSideBarNav} />

					{/* <!-- For all popups --> */}
					{/* will be mapped */}
					{/* <PopupContainer /> */}

					<div className="center" style={{ width: "80%" }}>
						<div className="centerContent">
							<div
								className="picFrame editPfPic"
								style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
							>
								{profilePicToShow !== null ? (
									<img src={profilePicToShow} alt="" />
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
							</div>
							{currentSideBarNav === "editProfile" && (
								<div className="picFrame editPfPicText" style={{ textAlign: "center" }}>
									<input
										type="file"
										style={{
											cursor: "pointer",
											fontSize: "0.8rem",
											margin: "0 10px",
										}}
										// value="Change Picture"
										onChange={handleChangeImage}
									/>
								</div>
							)}
							{imageError !== "" && <p style={{ textAlign: "center", color: "red" }}>{imageError}</p>}
							<h1>{userInfo?.username}</h1>
							{currentSideBarNav === "profile" && (
								<>
									<p> Email : {userInfo?.email}</p>
									<div style={{ width: "100%", marginBottom: "1rem" }}>
										<ExpSlide userCommunities={userCommunities} />
									</div>
								</>
							)}
							{currentSideBarNav === "editProfile" && (
								// <div
								// 	style={{
								// 		display: "flex",
								// 		flexDirection: "column",
								// 		alignItems: "start",
								// 		justifyContent: "center",
								// 		padding: "1rem",
								// 	}}
								// >
								<form>
									<table
										className="editProfileTable"
										style={{ marginTop: "2rem", width: "100%", paddingLeft: "2rem" }}
									>
										<tr>
											<td>
												<label style={{ marginRight: "1rem" }} htmlFor="email">
													{" "}
													Email Address:{" "}
												</label>
											</td>
											<td>
												<input
													style={{
														borderRadius: "10px",
														height: "30px",
														width: "300px",
														margin: "1rem 0",
													}}
													type="text"
													value={editProfileInput.email}
													onChange={handleChangeEmail}
												/>
											</td>
										</tr>
										{emailError !== "" && (
											<tr>
												<td colSpan="2" style={{ textAlign: "center", color: "red" }}>
													{emailError}
												</td>
											</tr>
										)}
										<tr>
											<td>
												<label style={{ marginRight: "1rem" }} htmlFor="email">
													{" "}
													Password:{" "}
												</label>
											</td>
											<td>
												<input
													style={{
														borderRadius: "10px",
														height: "30px",
														width: "300px",
														margin: "1rem 0",
													}}
													type="password"
													value={editProfileInput.password}
													onChange={handleChangePassword}
												/>
											</td>
										</tr>
										{passwordError !== "" && (
											<tr>
												<td colSpan="2" style={{ textAlign: "center", color: "red" }}>
													{passwordError}
												</td>
											</tr>
										)}
										<tr>
											<td>
												<label style={{ marginRight: "1rem" }} htmlFor="email">
													{" "}
													Confirm Password:{" "}
												</label>
											</td>
											<td>
												<input
													style={{
														borderRadius: "10px",
														height: "30px",
														width: "300px",
														margin: "1rem 0",
													}}
													type="password"
													value={editProfileInput.confirmPassword}
													onChange={handleChangeConfirmPassword}
												/>
											</td>
										</tr>
										{passwordConfirmError !== "" && (
											<tr>
												<td colSpan="2" style={{ textAlign: "center", color: "red" }}>
													{passwordConfirmError}
												</td>
											</tr>
										)}
									</table>
									<div
										className="editbtnContainer"
										style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}
									>
										<input
											type="submit"
											value="Confirm Changes"
											className="confirmChanges editbtn btn"
											onClick={handleSubmitEditProfile}
										/>
										{/* <input type="button" value="Reset Changes" className="resetChanges editbtn btn" /> */}
										<input
											type="button"
											value="Cancel"
											className="editbtn btn"
											onClick={handleClickCancelEdit}
										/>
									</div>
								</form>
							)}
						</div>
					</div>

					{/* <SideBarR /> */}
				</div>
			</section>
		</>
	);
}

export default UserProfile;
