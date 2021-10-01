function SideBarL() {
	return (
		<div class="sidebar left">
			<div class="sidebarContent">
				<a href="/" class="status">
					Status: Online
				</a>
				<a href="/" class="profile here">
					Profile
				</a>
				<a href="/" class="notification">
					Notifications
				</a>
				<a href="/" class="activities Log">
					Activities Log
				</a>
				<a href="./editProfile.html" class="editProfile">
					Edit Profile
				</a>
				<a href="/" class="characterSheet">
					Character Sheet
				</a>
				<br />
			</div>

			<div class="plus">
				<p>Try plus for 30 days!</p>
				<div class="btn plusbtn">
					<a href="/">Go Plus</a>
				</div>
			</div>
		</div>
	);
}

export default SideBarL;
