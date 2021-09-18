function CommunityMSettings() {
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
							<a href="./browse.html">Browse</a>
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

			<section class="needvh">
				<div class="container compartment h100">
					<div class="sidebar left communitySettingsSideBar">
						<div class="sidebarContent centerContent">
							<div class="picFrame">
								<img src="./img/dnd.jpg" alt="" />
							</div>
						</div>
					</div>

					<div class="center communitySettingsCenter">
						<div class="centerContent communitySettingsCenterContent">
							<div class="settingCategory">
								<a href="./communitySettingsGeneral.html">General</a>
								<a href="/" class="here">
									Member
								</a>
							</div>

							<div class="memberSettingsTableContainer">
								<table class="memberSettingsTable">
									<tr>
										<th>Name</th>
										<th>Role</th>
										<th>Last Active</th>
									</tr>
									<tr>
										<td>-</td>
										<td>-</td>
										<td>-</td>
										<td class="moreOption">
											<img src="./img/icon/more.png" alt="more" />
										</td>
									</tr>
									<tr>
										<td>-</td>
										<td>-</td>
										<td>-</td>
										<td class="moreOption">
											<img src="./img/icon/more.png" alt="more" />
										</td>
									</tr>
								</table>
							</div>

							<div class="pageNav">
								<button class="pageNavbtn previousbtn btn">
									<a href="/">&#8249;</a>
								</button>
								<p>1/1</p>
								<button class="pageNavbtn nextbtn btn">
									<a href="/">&#8250;</a>
								</button>
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

export default CommunityMSettings;
