function CreateCommunity() {
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
							<a href="/" class="here">
								Create
							</a>
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
					<div class="sidebar left communitySettingsSideBar">
						<div class="sidebarContent centerContent">
							{/* <!-- <div class="picFrame"><img src="./img/dnd.jpg" alt=""></div> --> */}
						</div>
					</div>

					<div class="center communitySettingsCenter">
						<div class="centerContent communitySettingsCenterContent">
							<p class="t40 underline">Nothing catched your eyes? Then make your own</p>

							<form action="" class="editFieldContainer">
								<div class="editCommunityName inputpair">
									<label for="editCommunityName">Community Name*</label>
									<input
										type="text"
										class="editCommunityName"
										placeholder="Cannot be changed later"
									/>
								</div>
								<div class="editCommunityTagContainer inputpair">
									<label for="communityTagList">Community Tags</label>
									<div class="communityTagList">
										<button class="communityTagFrame addbtn">
											<strong>+</strong>
										</button>
									</div>
								</div>

								<div class="editCommunityPictureContainer inputpair">
									<label for="uploadImg editCommunityPicture">Community Picture</label>
									<input type="file" name="edeitCommunityPicture" />
								</div>

								<div class="editCommunityDescContainer inputpair">
									<label for="editCommunityDesc">Community Description</label>
									<textarea
										name="editCommunityDesc"
										cols="30"
										rows="10"
										placeholder="sell it"
									></textarea>
								</div>

								<div class="editbtnContainer">
									<input type="submit" value="Create Community" class="createbtn btn" />
								</div>
							</form>
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

export default CreateCommunity;
