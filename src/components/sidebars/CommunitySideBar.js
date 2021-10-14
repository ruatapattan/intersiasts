import { useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Gear } from "react-bootstrap-icons";
import { isMember } from "../../services/isMemberService";
import Swal from "sweetalert2";
import axios from "../../config/axios";
import { isOwner } from "../../services/isOwnerService";

function CommunitySideBar({ communityData, staticCommunityId }) {
	const history = useHistory();
	const params = useParams();
	const { user } = useContext(AuthContext);
	const { community, tags, communityMembers } = communityData;
	const memberList = communityMembers?.map((item) => item.memberId);

	// console.log(staticCommunityId);
	// console.log(communityMembers);

	const communityOwner = communityMembers?.find((item) => item?.memberRole === "owner").memberId;
	// console.log(communityOwner);

	// console.log(isOwner(user.id, communityOwner));

	// console.log(
	// 	"memberIdList",
	// 	communityMembers?.map((item) => item.memberId)
	// );
	// console.log(
	// 	isMember(
	// 		user.id,
	// 		communityMembers?.map((item) => item.memberId)
	// 	)
	// );
	// isMember(user.id,communityMembers?.map((item) => item.memberId))

	const handleClickJoin = async (e) => {
		e.preventDefault();

		await axios.post(`http://localhost:8080/community/${staticCommunityId}/join`);

		const done = await Swal.fire({
			title: "You are now a member of this community!",
			icon: "success",
			background: "#23272a",
			customClass: {
				htmlContainer: "whiteText",
				title: "whiteText",
			},
		});
		if (done.isConfirmed) window.location.reload();
	};

	return (
		<div className="sidebar left w30 communitySideBar">
			<div
				style={{ cursor: "pointer" }}
				onClick={() => history.push(`/community/${params.communityId}`)}
				className="sidebarContent centerContent"
			>
				<div className="picFrame">
					<img src={community?.image.secure_url} alt="" />
				</div>
				<p>Welcome to:</p>
				<p className="t40" style={{ textAlign: "center" }}>
					{community?.name}
				</p>
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
			{isMember(user.id, memberList) ? (
				<>
					<div className="plus">
						<div className="btn plusbtn chatNow confirmChanges">
							<Link to={`/community/${staticCommunityId}/create`}>Create Thread</Link>
						</div>
					</div>
					<div className="plus">
						<div className="btn plusbtn chatNow resetChanges">
							<Link to="#">Chat Now</Link>
						</div>
					</div>

					{isOwner(user.id, communityOwner) && (
						<div className="communitySettings">
							<Link to={`/community/${community?.id}/settings/`}>
								<div className="btn settingsbtn">
									<Gear />
								</div>
							</Link>
						</div>
					)}
				</>
			) : (
				<div className="plus">
					<div className="btn plusbtn chatNow confirmChanges">
						<Link onClick={handleClickJoin}>Join Community</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default CommunitySideBar;
