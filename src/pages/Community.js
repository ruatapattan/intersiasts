import ThreadList from "../components/community/ThreadList";
import ExpSlide from "../components/ExpSlide";
import CommunitySideBar from "../components/sidebars/CommunitySideBar";
function Community() {
	return (
		<>
			<section>
				<div className="container compartment navSpace">
					<CommunitySideBar />

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

							<ThreadList />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Community;
