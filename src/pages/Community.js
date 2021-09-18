import { Link } from "react-router-dom";

function Community() {
	return (
		<>
			<header>
				<div class="container header">
					<div class="logo head">
						<img src="./img/logo.png" alt="logo" class="logoimg" />
					</div>
					<div class="searchBar head">
						<input type="text" placeholder="Search.." name="search" class="textInput" />
						<button class="btn srchbtn">Search</button>
					</div>
					<ul class="navbar head">
						<li>
							<a href="./index.html">Home</a>
						</li>
						<li>
							<a href="browse.html">Browse</a>
						</li>
						<li>
							<a href="create.html">Create</a>
						</li>
						<li class="userPic">
							<a href="./profile.html">
								<img src="./img/pfpic.png" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</header>

			<section>
				<div class="container compartment">
					<div class="sidebar left w30 communitySideBar">
						<div class="sidebarContent centerContent">
							<div class="picFrame">
								<img src="./img/dnd.jpg" alt="" />
							</div>
							<p>Welcome to:</p>
							<p class="t40">DnD [TH]</p>
							<div>
								<div class="flexRow">
									<p class="m0">Member:</p>
									<p class="memberCount m0">0</p>
								</div>
								<div class="flexRow">
									<p class="m0">Online:</p>
									<p class="memberOnline m0">0</p>
								</div>
							</div>
						</div>
						<div class="plus">
							<div class="btn plusbtn chatNow">
								<a href="/">Chat Now</a>
							</div>
						</div>

						<div class="communitySettings">
							<Link to="/community/:id/settings/general">
								<div class="btn settingsbtn">
									<img src="./img/icon/setting.png" alt="" />
								</div>
							</Link>
						</div>
					</div>

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

							<section class="expslideContainer memoriesSlide">
								<p class="textCenter">Recent Memories</p>
								<div class="container expslide">
									<a href="/">
										<img src="./img/memories/memory1.png" alt="" />
									</a>
									<a href="/">
										<img src="./img/memories/memory3.jpg" alt="" />
									</a>
									<a href="/">
										<img src="./img/memories/memory4.png" alt="" />
									</a>
								</div>
							</section>
						</div>
					</div>
				</div>
			</section>

			<footer>
				<p>Intersiasts 2021</p>
			</footer>
		</>
	);
}

export default Community;
