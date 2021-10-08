// import axios from "../config/axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CommunitySideBar from "../components/sidebars/CommunitySideBar";
import axios from "../config/axios";

import ThreadContainer from "../components/threads/ThreadContainer";
import { ThreadContext } from "../contexts/ThreadContext";

function Thread() {
	const params = useParams();
	// const { setCommunityData, communityData } = useContext(CommunityContext);
	const [communityData, setCommunityData] = useState({});

	useEffect(() => {
		console.log("hello");
		const fetch = async () => {
			const fetchedThreads = await axios.get(`http://localhost:8080/thread/${params.threadId}`);
			setCommunityData({ ...fetchedThreads.data });
		};
		fetch();
	}, []);

	console.log(communityData);

	return (
		<>
			<div className="container compartment navSpace">
				<CommunitySideBar communityData={communityData} staticCommunityId={params.id} />
				<ThreadContainer threadData={communityData} staticCommunityId={params.id} />
			</div>
		</>
	);
}

export default Thread;
