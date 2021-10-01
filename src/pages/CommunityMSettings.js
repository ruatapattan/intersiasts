import Member from "../layout/settings/Member";

function CommunityMSettings() {
	return (
		<>
			<section class="needvh navSpace">
				<div class="container compartment h100">
					<div class="sidebar left communitySettingsSideBar">
						<div class="sidebarContent centerContent">
							<div class="picFrame">
								<img src="./img/dnd.jpg" alt="" />
							</div>
						</div>
					</div>

					<div class="center communitySettingsCenter">
						<div class="centerContent communitySettingsCenterContent">
							<div class="settingCategory">
								<a href="./communitySettingsGeneral.html">General</a>
								<a href="/" class="here">
									Member
								</a>
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
