import Member from "../layout/settings/Member";

function CommunityMSettings() {
	return (
		<>
			<section className="needvh navSpace">
				<div className="container compartment h100">
					<div className="sidebar left communitySettingsSideBar">
						<div className="sidebarContent centerContent">
							<div className="picFrame">
								<img src="./img/dnd.jpg" alt="" />
							</div>
						</div>
					</div>

					<div className="center communitySettingsCenter">
						<div className="centerContent communitySettingsCenterContent">
							<div className="settingCategory">
								<Link to="./communitySettingsGeneral.html">General</Link>
								<Link to="/" className="here">
									Member
								</Link>
							</div>

							<Member />
						</div>
					</div>
				</div>
			</section>

			<footer>
				<p>Intersiasts 2021</p>
			</footer>
		</>
	);
}

export default CommunityMSettings;
