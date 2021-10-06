import { Link } from "react-router-dom";
import General from "./General";
// import Member from "./Member";

function SettingsContainer(props) {
	return (
		<div className="center communitySettingsCenter">
			<div className="centerContent communitySettingsCenterContent">
				<div className="settingCategory">
					<Link to="/" className="here">
						General
					</Link>
					<Link to="./communitySettingsMember.html" className="">
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
