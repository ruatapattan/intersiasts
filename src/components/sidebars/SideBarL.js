import { Link } from "react-router-dom";

function SideBarL({ setCurrentSideBarNav, currentSideBarNav }) {
	return (
		<div className="sidebar left" style={{ justifyContent: "space-around" }}>
			<div className="sidebarContent">
				<Link to="#" className={`status `}>
					Status: Online
				</Link>
				<Link
					to="#"
					className={`profile ${currentSideBarNav === "profile" && "here"} `}
					onClick={() => setCurrentSideBarNav("profile")}
				>
					Profile
				</Link>
				<Link to="#" className={`notification ${currentSideBarNav === "notification" && "here"}`}>
					Notifications
				</Link>
				<Link to="#" className={`activities Log ${currentSideBarNav === "activitiesLog" && "here"}`}>
					Activities Log
				</Link>
				<Link
					to="#"
					onClick={() => setCurrentSideBarNav("editProfile")}
					className={`editProfile ${currentSideBarNav === "editProfile" && "here"}`}
				>
					Edit Profile
				</Link>
				<br />
			</div>

			<div className="plus">
				<div className="btn plusbtn">
					<Link to="/createCommunity">Create Community</Link>
				</div>
			</div>
		</div>
	);
}

export default SideBarL;
