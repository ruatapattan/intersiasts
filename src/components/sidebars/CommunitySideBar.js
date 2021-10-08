import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Gear } from "react-bootstrap-icons";

function CommunitySideBar({ communityData, staticCommunityId }) {
	const { user } = useContext(AuthContext);
	const { community, tags, communityMembers } = communityData;

	return (
		<div className="sidebar left w30 communitySideBar">
			<div className="sidebarContent centerContent">
				<div className="picFrame">
					<img src={community?.image.secure_url} alt="" />
				</div>
				<p>Welcome to:</p>
				<p className="t40">{community?.name}</p>
				<div>
					<div className="flexRow">
						<p className="m0">Member: {communityMembers?.length}</p>
					</div>
					<div className="flexRow">
						<p className="m0">Online:</p>
						<p className="memberOnline m0">0</p>
					</div>
				</div>
			</div>
			{communityMembers?.filter((item) => item.memberId === user.id) ? (
				<div className="plus">
					<div className="btn plusbtn chatNow confirmChanges">
						<Link to={`/community/${staticCommunityId}/create`}>Create Thread</Link>
					</div>
				</div>
			) : (
				<div className="plus">
					<div className="btn plusbtn chatNow confirmChanges">
						<Link to={`/community/${staticCommunityId}/create`}>Join Community</Link>
					</div>
				</div>
			)}
			<div className="plus">
				<div className="btn plusbtn chatNow resetChanges">
					<Link to="#">Chat Now</Link>
				</div>
			</div>

			<div className="communitySettings">
				<Link to="/community/:id/settings/general">
					<div className="btn settingsbtn">
						<Gear />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CommunitySideBar;
