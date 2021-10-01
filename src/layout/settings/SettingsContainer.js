import { Link } from "react-router-dom";
import General from "./General";
// import Member from "./Member";

function SettingsContainer(props) {
	return (
		<div class="center communitySettingsCenter">
			<div class="centerContent communitySettingsCenterContent">
				<div class="settingCategory">
					<Link to="/" class="here">
						General
					</Link>
					<Link to="./communitySettingsMember.html" class="">
						Member
					</Link>
				</div>

				<General />
				{/* {settingsType === 'general' ? <General/> : <Member/>} */}
			</div>
		</div>
	);
}

export default SettingsContainer;
