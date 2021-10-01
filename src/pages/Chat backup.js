function Chat() {
	return (
		<>
			<div class="chatContainer">
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
					<div class="container compartment threePiecesChat">
						<div class="sidebar left">
							<div class="sidebarContent">
								<p class="textCenter serverName">Broskis (4)</p>
								<p class="textCenter">Channels</p>
								<a href="/" class="server here">
									General
								</a>
								<a href="/" class="server">
									Gaming
								</a>
								<a href="/" class="server">
									Do not disturb (srsly)
								</a>
							</div>
						</div>

						<div class="center">
							<div class="centerContent"></div>
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

				<div class="textInputContainer container">
					<div class="userBar">
						<div class="userPic userPicChat">
							<a href="/">
								<img src="./img/pfpic.png" alt="" />
							</a>
						</div>
						<p>xxxNoobMaster69xxx</p>
					</div>

					<div class="textBar">
						<input type="text" name="chatInputBar" class="chatInputBar" />
						<button class="btn sendmsgbtn">Send</button>
					</div>

					<div class="rightBar"></div>
				</div>
			</div>
		</>
	);
}

export default Chat;
