function Chat() {
	return (
		<>
			<div className="chatContainer">
				<header>
					<div className="container header">
						<div className="logo head">
							<img src="./img/logo.png" alt="logo" className="logoimg" />
						</div>
						<div className="searchBar head">
							<input type="text" placeholder="Search.." name="search" className="textInput" />
							<button className="btn srchbtn">Search</button>
						</div>
						<ul className="navbar head">
							<li>
								<a href="./index.html">Home</a>
							</li>
							<li>
								<a href="browse.html">Browse</a>
							</li>
							<li>
								<a href="create.html">Create</a>
							</li>
							<li className="userPic">
								<a href="./profile.html">
									<img src="./img/pfpic.png" alt="" />
								</a>
							</li>
						</ul>
					</div>
				</header>

				<section>
					<div className="container compartment threePiecesChat">
						<div className="sidebar left">
							<div className="sidebarContent">
								<p className="textCenter serverName">Broskis (4)</p>
								<p className="textCenter">Channels</p>
								<a href="/" className="server here">
									General
								</a>
								<a href="/" className="server">
									Gaming
								</a>
								<a href="/" className="server">
									Do not disturb (srsly)
								</a>
							</div>
						</div>

						<div className="center">
							<div className="centerContent"></div>
						</div>

						<div className="sidebar right">
							<div className="sidebarContent friendList">
								<p className="textCenter">Friends</p>
								<div className="friend">
									<div className="userPic">
										<a href="/">
											<img src="./img/pepe.png" alt="" />
										</a>
									</div>
									<p>P€P€</p>
								</div>
								<div className="friend">
									<div className="userPic">
										<a href="/">
											<img src="./img/alexd.jpg" alt="" />
										</a>
									</div>
									<p>AleXD</p>
								</div>
								<div className="friend">
									<div className="userPic">
										<a href="/">
											<img src="./img/sprout.jpg" alt="" />
										</a>
									</div>
									<p>sprout</p>
								</div>
							</div>

							<div className="sidebarContent groupList">
								<p className="textCenter">Groups</p>
								<div className="group">
									<div className="userPic">
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

				<div className="textInputContainer container">
					<div className="userBar">
						<div className="userPic userPicChat">
							<a href="/">
								<img src="./img/pfpic.png" alt="" />
							</a>
						</div>
						<p>xxxNoobMaster69xxx</p>
					</div>

					<div className="textBar">
						<input type="text" name="chatInputBar" className="chatInputBar" />
						<button className="btn sendmsgbtn">Send</button>
					</div>

					<div className="rightBar"></div>
				</div>
			</div>
		</>
	);
}

export default Chat;
