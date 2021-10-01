// import CommunitySettingsSideBar from "../components/sidebars/CommunitySettingsSideBar";
// import SettingsContainer from "../layout/settings/SettingsContainer";

function CommunitySettingsContainer(props) {
	return (
		<>
			<section>
				<div class="container compartment navSpace">{props.children}</div>
			</section>
		</>
	);
}

export default CommunitySettingsContainer;
