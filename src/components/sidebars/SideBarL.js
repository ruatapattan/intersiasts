import { Link } from "react-router-dom";

function SideBarL() {
	return (
		<div className="sidebar left" style={{ justifyContent: "space-around" }}>
			<div className="sidebarContent">
				<Link to="#" className="status">
					Status: Online
				</Link>
				<Link to="#" className="profile here">
					Profile
				</Link>
				<Link to="#" className="notification">
					Notifications
				</Link>
				<Link to="#" className="activities Log">
					Activities Log
				</Link>
				<Link to="./editProfile.html" className="editProfile">
					Edit Profile
				</Link>
				<br />
			</div>

			<div className="plus">
				<div className="btn plusbtn">
					<Link to="#">Create Community</Link>
				</div>
			</div>
		</div>
	);
}

export default SideBarL;
