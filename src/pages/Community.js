import ThreadList from "../components/community/ThreadList";
import ExpSlide from "../components/ExpSlide";
import CommunitySideBar from "../components/sidebars/CommunitySideBar";
import axios from "../config/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Community() {
	// useContext
	const [communityData, setCommunityData] = useState({});

	// const { setCommunityData, communityData } = useContext(CommunityContext);

	const params = useParams();
	//useContext()
	//useeffect => get Id from useparam {
	// res = axios => fetch all threads
	// set contextState
	// }
	useEffect(() => {
		console.log("hello");
		const fetch = async () => {
			// console.log(params.id);
			const fetchedThreads = await axios.get(`http://localhost:8080/community/${params.id}`);
			setCommunityData({ ...fetchedThreads.data });
		};
		fetch();
	}, []);

	console.log("communityData: ", communityData);

	return (
		<>
			<section>
				<div className="container compartment navSpace">
					{Object.keys(communityData).length > 0 && (
						<>
							<CommunitySideBar communityData={communityData} staticCommunityId={params.id} />

							<div className="center w70">
								<div className="centerContent">
									{/* <!-- event table --> */}
									<div className="eventTableContainer">
										<p>Event Schedule</p>
										<table className="eventTable">
											<tr>
												<th>Date</th>
												<th>Time</th>
												<th>Event</th>
											</tr>
											<tr>
												<td>-</td>
												<td>-</td>
												<td>-</td>
											</tr>
										</table>
									</div>
									<br />
									{/* recent memories */}
									<ExpSlide />

									<ThreadList communityData={communityData} />
								</div>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default Community;
