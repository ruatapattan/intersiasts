import { useContext, useEffect, useState } from "react";
import ExpSlide from "../components/ExpSlide";
import SideBarL from "../components/sidebars/SideBarL";
import SideBarR from "../components/sidebars/SideBarR";
import { AuthContext } from "../contexts/AuthContext";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
// import PopupContainer from "../components/sidebars/PopupContainer";

//check if user is the owner of this profile via useparam and compare with token id

function UserProfile() {
	const [userInfo, setUserInfo] = useState({});
	const { user } = useContext(AuthContext);
	const params = useParams();

	useEffect(() => {
		const fetch = async () => {
			const result = await axios.get(`/profile/${params.id}`);
			setUserInfo(result.data.userProfile);
		};
		fetch();
	}, []);

	console.log(userInfo);

	//pfp
	console.log(userInfo?.profilePic);

	//access community img url:
	userInfo?.CommunityMembers?.forEach((item) => console.log(item?.Community?.communityImage?.secure_url));

	return (
		<>
			<section>
				<div className="container compartment navSpace" style={{ height: "80vh" }}>
					<SideBarL />

					{/* <!-- For all popups --> */}
					{/* will be mapped */}
					{/* <PopupContainer /> */}

					<div className="center" style={{ width: "80%" }}>
						<div className="centerContent">
							<div className="picFrame">
								<img src="./img/pfpic.png" alt="" />
							</div>
							<p>xxxNoobMaster69xxx</p>
							{/* <!-- <br> --> */}
							<ExpSlide />
						</div>
					</div>

					{/* <SideBarR /> */}
				</div>
			</section>
		</>
	);
}

export default UserProfile;
