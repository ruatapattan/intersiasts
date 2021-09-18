function userProfile() {
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
							<a href="/">
								<img src="./img/pfpic.png" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</header>

			<section>
				<div class="container compartment">
					<div class="sidebar left">
						<div class="sidebarContent">
							<a href="/" class="status">
								Status: Online
							</a>
							<a href="/" class="profile here">
								Profile
							</a>
							<a href="/" class="notification">
								Notifications
							</a>
							<a href="/" class="activities Log">
								Activities Log
							</a>
							<a href="./editProfile.html" class="editProfile">
								Edit Profile
							</a>
							<a href="/" class="characterSheet">
								Character Sheet
							</a>
							<br />
						</div>

						<div class="plus">
							<p>Try plus for 30 days!</p>
							<div class="btn plusbtn">
								<a href="/">Go Plus</a>
							</div>
						</div>
					</div>

					{/* <!-- For all popups --> */}
					<div class="popupBox">
						{/* <!-- for status --> */}
						<div class="onlineStatusContainer hidden">
							<p class="onlineStatusLabel popupLabel">
								Status: <span>Online</span>
							</p>

							<div class="onlineStatusItem popupItem">
								<div class="popupText">
									<p>Online</p>
								</div>
							</div>

							<div class="onlineStatusItem popupItem">
								<div class="popupText">
									<p>Away</p>
								</div>
							</div>

							<div class="onlineStatusItem popupItem">
								<div class="popupText">
									<p>Do not disturb</p>
								</div>
							</div>
						</div>

						{/* <!-- for notification --> */}
						<div class="notiContainer hidden">
							<p class="notiLabel popupLabel">
								Notifications: <span>2</span>
							</p>

							<div class="notiItem popupItem">
								<img src="./img/pepe.png" alt="" />
								<div class="popupText">
									<h4>P€P€ in Broskis</h4>
									<p>In case you people forgot, we...</p>
								</div>
							</div>

							<div class="popupItem">
								<img src="./img/sprout.jpg" alt="" />
								<div class="popupText">
									<h4>sprout in Broskis</h4>
									<p>Shut up Kyle</p>
								</div>
							</div>

							<p class="popupShowMore">Show More</p>
						</div>

						{/* <!-- for activity log--> */}
						<div class="notiContainer hidden">
							<p class="activityLabel popupLabel">Recent Activities</p>

							<div class="activityItem popupItem">
								<div class="popupText">
									<h4>No recent activity</h4>
								</div>
							</div>
							{/* <!-- <p class="popupShowMore">Show More</p> --> */}
						</div>
					</div>

					<div class="center">
						<div class="centerContent">
							<div class="picFrame">
								<img src="./img/pfpic.png" alt="" />
							</div>
							<p>xxxNoobMaster69xxx</p>
							{/* <!-- <br> --> */}
							<section class="expslideContainer">
								<p class="textCenter">Communities</p>
								<div class="container expslide">
									<a href="./community.html">
										<img src="./img/dnd.jpg" alt="" />
									</a>
									<a href="/">
										<img src="./img/chess.jpg" alt="" />
									</a>
									<a href="/">
										<img src="./img/model.jpg" alt="" />
									</a>
									<a href="/">
										<img src="./img/brew.jpg" alt="" />
									</a>
									<a href="/">
										<img src="./img/knit.jpg" alt="" />
									</a>
								</div>
							</section>
						</div>
					</div>

					<div class="sidebar right">
						<div class="sidebarContent friendList">
							<p class="textCenter">Friends</p>
							<div class="friend">
								<div class="userPic">
									<a href="/">
										<img src="./img/pepe.png" alt="" />
									</a>
								</div>
								<p>P€P€</p>
							</div>
							<div class="friend">
								<div class="userPic">
									<a href="/">
										<img src="./img/alexd.jpg" alt="" />
									</a>
								</div>
								<p>AleXD</p>
							</div>
							<div class="friend">
								<div class="userPic">
									<a href="/">
										<img src="./img/sprout.jpg" alt="" />
									</a>
								</div>
								<p>sprout</p>
							</div>
						</div>

						<div class="sidebarContent groupList">
							<p class="textCenter">Groups</p>
							<div class="group">
								<div class="userPic">
									<a href="./chat.html">
										<img src="./img/groupPic.jpg" alt="" />
									</a>
								</div>
								<p>Broskis</p>
							</div>
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

export default userProfile;
