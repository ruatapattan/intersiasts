import { Link } from "react-router-dom";

function SideBarLChat() {
	return (
		<>
			<div className="sidebar left">
				<div className="sidebarContent">
					<p className="textCenter serverName">Broskis (4)</p>
					<p className="textCenter">Channels</p>
					<Link to="/" className="server here">
						General
					</Link>
					<Link to="/" className="server">
						Gaming
					</Link>
					<Link to="/" className="server">
						Do not disturb (srsly)
					</Link>
				</div>
			</div>
		</>
	);
}

export default SideBarLChat;
