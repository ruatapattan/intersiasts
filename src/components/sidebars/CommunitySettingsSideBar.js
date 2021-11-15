import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";

function CommunitySettingsSideBar({ type, showImageSettings }) {
	const { showImage } = useContext(CreateContext);
	console.log(typeof showImage);
	console.log(showImage);
	console.log(typeof showImageSettings);
	console.log(showImageSettings);

	let toShow = null;

	if (showImage) {
		toShow = URL.createObjectURL(showImage);
	} else if (showImageSettings) {
		toShow = typeof showImageSettings === "string" ? showImageSettings : URL.createObjectURL(showImageSettings);
	} else toShow = null;

	return (
		<div className="sidebar left communitySettingsSideBar">
			<div className="sidebarContent centerContent">
				<div className="picFrame">
					<img src={toShow} alt="" />
				</div>
			</div>
		</div>
	);
}

export default CommunitySettingsSideBar;
