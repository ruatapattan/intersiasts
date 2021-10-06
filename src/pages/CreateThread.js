import CommunitySettingsSideBar from "../components/sidebars/CommunitySettingsSideBar";
import CommunitySettingsContainer from "../layout/CommunitySettingsContainer";
import CreateContainer from "../layout/settings/CreateContainer";

function CreateThread() {
	return (
		<>
			<CommunitySettingsContainer>
				<CommunitySettingsSideBar />

				<CreateContainer />
			</CommunitySettingsContainer>
		</>
	);
}

export default CreateThread;
