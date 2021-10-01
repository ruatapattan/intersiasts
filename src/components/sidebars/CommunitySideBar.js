import { Link } from "react-router-dom";
function CommunitySideBar() {
	return (
		<div class="sidebar left w30 communitySideBar">
			<div class="sidebarContent centerContent">
				<div class="picFrame">
					<img src="./img/dnd.jpg" alt="" />
				</div>
				<p>Welcome to:</p>
				<p class="t40">DnD [TH]</p>
				<div>
					<div class="flexRow">
						<p class="m0">Member:</p>
						<p class="memberCount m0">0</p>
					</div>
					<div class="flexRow">
						<p class="m0">Online:</p>
						<p class="memberOnline m0">0</p>
					</div>
				</div>
			</div>
			<div class="plus">
				<div class="btn plusbtn chatNow">
					<a href="/">Chat Now</a>
				</div>
			</div>

			<div class="communitySettings">
				<Link to="/community/:id/settings/general">
					<div class="btn settingsbtn">
						<img src="./img/icon/setting.png" alt="" />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CommunitySideBar;
