import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { isMember } from "../../services/isMemberService";
import ThreadItem from "./ThreadItem";

function ThreadList({ communityData }) {
	const { user } = useContext(AuthContext);

	const memberList = communityData?.communityMembers?.map((item) => item.memberId);
	return (
		<div
			style={{
				border: "1px white solid",
				width: "90%",
				padding: "1rem",
			}}
		>
			<div>Threads</div>

			{/* //map threads after useEffect took effect */}
			{communityData?.threads?.map((item) => (
				<ThreadItem threadData={item} isMember={isMember(user.id, memberList)} />
			))}
		</div>
	);
}

export default ThreadList;
