function SideBarR() {
	return (
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
	);
}

export default SideBarR;
