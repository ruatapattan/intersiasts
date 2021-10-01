import ExpSlide from "../components/ExpSlide";
import CommunitySideBar from "../components/sidebars/CommunitySideBar";
function Community() {
	return (
		<>
			<section>
				<div class="container compartment navSpace">
					<CommunitySideBar />

					<div class="center w70">
						<div class="centerContent">
							{/* <!-- event table --> */}
							<div class="eventTableContainer">
								<p>Event Schedule</p>
								<table class="eventTable">
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

							{/* recent memories */}
							<ExpSlide />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Community;
