import { Link } from "react-router-dom";

function SideBarR() {
	return (
		<div className="sidebar right">
			<div className="sidebarContent friendList">
				<p className="textCenter">Friends</p>
				<div className="friend">
					<div className="userPic">
						<Link to="/">
							<img src="./img/pepe.png" alt="" />
						</Link>
					</div>
					<p>P€P€</p>
				</div>
				<div className="friend">
					<div className="userPic">
						<Link to="/">
							<img src="./img/alexd.jpg" alt="" />
						</Link>
					</div>
					<p>AleXD</p>
				</div>
				<div className="friend">
					<div className="userPic">
						<Link to="/">
							<img src="./img/sprout.jpg" alt="" />
						</Link>
					</div>
					<p>sprout</p>
				</div>
			</div>

			<div className="sidebarContent groupList">
				<p className="textCenter">Groups</p>
				<div className="group">
					<div className="userPic">
						<Link to="./chat.html">
							<img src="./img/groupPic.jpg" alt="" />
						</Link>
					</div>
					<p>Broskis</p>
				</div>
			</div>
		</div>
	);
}

export default SideBarR;
