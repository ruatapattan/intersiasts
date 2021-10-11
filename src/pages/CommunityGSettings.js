// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../config/axios";
import CommunitySettingsSideBar from "../components/sidebars/CommunitySettingsSideBar";
import CommunitySettingsContainer from "../layout/CommunitySettingsContainer";
import SettingsContainer from "../layout/settings/SettingsContainer";

function CommunityGSettings() {
	const [showImage, setShowImage] = useState();
	const [communityData, setCommunityData] = useState({});
	const params = useParams();
	useEffect(() => {
		console.log("hello");
		const fetch = async () => {
			// console.log(params.id);
			const fetchedThreads = await axios.get(`http://localhost:8080/community/${params.id}`);
			// console.log(fetchedThreads.data);
			setCommunityData({ ...fetchedThreads.data });
		};
		fetch();
	}, []);

	useEffect(() => {
		setShowImage(communityData?.community?.image?.secure_url);
	}, [communityData]);

	console.log(showImage);

	return (
		<>
			<CommunitySettingsContainer>
				<CommunitySettingsSideBar showImageSettings={showImage} type="settings" />

				{/* render which depends on type state */}
				<SettingsContainer communityData={communityData} setShowImage={setShowImage} />
			</CommunitySettingsContainer>
		</>
	);
}

export default CommunityGSettings;
