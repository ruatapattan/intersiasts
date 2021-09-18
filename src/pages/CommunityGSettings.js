import { Link } from "react-router-dom";

function CommunityGSettings() {
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
								<Link to="/" class="here">
									General
								</Link>
								<Link to="./communitySettingsMember.html" class="">
									Member
								</Link>
							</div>

							<form action="" class="editFieldContainer">
								<div class="editCommunityName inputpair">
									<label for="editCommunityName">Community Name</label>
									<p class="m0">DnD [TH]</p>
								</div>
								<div class="editCommunityTagContainer inputpair">
									<label for="communityTagList">Community Tags</label>
									<div class="communityTagList">
										<button class="communityTagFrame addbtn">
											<strong>+</strong>
										</button>
										<div class="communityTagFrame communityTag">TTRPG</div>
										<div class="communityTagFrame communityTag">TH</div>
										<div class="communityTagFrame communityTag">Indoor</div>
									</div>
								</div>

								<div class="editCommunityPictureContainer inputpair">
									<label for="uploadImg editCommunityPicture">Community Picture</label>
									<input type="file" name="edeitCommunityPicture" />
								</div>

								<div class="editCommunityDescContainer inputpair">
									<label for="editCommunityDesc">Community Description</label>
									<textarea name="editCommunityDesc" cols="30" rows="10">
										Please join I have no friends.
									</textarea>
								</div>

								<div class="editbtnContainer">
									<input type="submit" value="Confirm Changes" class="confirmChanges editbtn btn" />
									<input type="button" value="Reseet Changes" class="resetChanges editbtn btn" />
									<input type="button" value="Delete Community" class="deleteCommunity editbtn btn" />
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

export default CommunityGSettings;
