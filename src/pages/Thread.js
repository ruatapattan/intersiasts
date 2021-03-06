// import axios from "../config/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommunitySideBar from "../components/sidebars/CommunitySideBar";
import axios from "../config/axios";

import ThreadContainer from "../components/threads/ThreadContainer";

function Thread() {
	const params = useParams();
	const [communityData, setCommunityData] = useState({});

	useEffect(() => {
		// console.log("hello");
		const fetch = async () => {
			const fetchedThreads = await axios.get(`http://localhost:8080/thread/${params.threadId}`);
			setCommunityData({ ...fetchedThreads.data });
			// setThreadContextData({ ...fetchedThreads.data });
		};

		fetch();
	}, []);

	console.log("communityData", communityData);

	return (
		<>
			<div className="container compartment navSpace">
				<CommunitySideBar communityData={communityData} staticCommunityId={params.communityId} />
				<ThreadContainer threadData={communityData} staticCommunityId={params.communityId} />
			</div>
		</>
	);
}

export default Thread;
