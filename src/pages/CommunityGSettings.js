// import { Link } from "react-router-dom";

import CommunitySettingsSideBar from "../components/sidebars/CommunitySettingsSideBar";
import CommunitySettingsContainer from "../layout/CommunitySettingsContainer";
import SettingsContainer from "../layout/settings/SettingsContainer";

function CommunityGSettings() {
	return (
		<>
			<CommunitySettingsContainer>
				<CommunitySettingsSideBar />

				{/* render which depends on type state */}
				<SettingsContainer />
			</CommunitySettingsContainer>
		</>
	);
}

export default CommunityGSettings;
