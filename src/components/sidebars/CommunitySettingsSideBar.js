import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";

function CommunitySettingsSideBar() {
	const { showImage } = useContext(CreateContext);
	console.dir(showImage);

	let toShow;

	if (showImage) {
		toShow = URL.createObjectURL(showImage);
	}

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
