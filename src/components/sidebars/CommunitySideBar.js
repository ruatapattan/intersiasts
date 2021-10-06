import { Link } from "react-router-dom";
function CommunitySideBar() {
	return (
		<div className="sidebar left w30 communitySideBar">
			<div className="sidebarContent centerContent">
				<div className="picFrame">
					<img src="./img/dnd.jpg" alt="" />
				</div>
				<p>Welcome to:</p>
				<p className="t40">DnD [TH]</p>
				<div>
					<div className="flexRow">
						<p className="m0">Member:</p>
						<p className="memberCount m0">0</p>
					</div>
					<div className="flexRow">
						<p className="m0">Online:</p>
						<p className="memberOnline m0">0</p>
					</div>
				</div>
			</div>
			<div className="plus">
				<div className="btn plusbtn chatNow">
					<Link to="/">Chat Now</Link>
				</div>
			</div>

			<div className="communitySettings">
				<Link to="/community/:id/settings/general">
					<div className="btn settingsbtn">
						<img src="./img/icon/setting.png" alt="" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CommunitySideBar;
