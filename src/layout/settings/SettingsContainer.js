import { Link } from "react-router-dom";
import General from "./General";
// import Member from "./Member";

function SettingsContainer({ communityData, setShowImage }) {
	const { community, tags } = communityData;

	console.log(community);

	return (
		<div className="center communitySettingsCenter">
			<div className="centerContent communitySettingsCenterContent">
				<div className="settingCategory">
					<Link to="#" className="here">
						General
					</Link>
					<Link to="#" className="">
						Member
					</Link>
				</div>

				<General community={community} tags={tags} setShowImage={setShowImage} />
				{/* {settingsType === 'general' ? <General/> : <Member/>} */}
			</div>
		</div>
	);
}

export default SettingsContainer;
