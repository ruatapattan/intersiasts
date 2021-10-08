import { useState } from "react";
import CommentItem from "./CommentItem";
import ReplyContainer from "./ReplyContainer";
import ThreadReplyForm from "./ThreadReplyForm";

function CommentContainer({ threadData, threadReply }) {
	const [isCommenting, setIsCommenting] = useState(false);

	console.log(threadData);

	return (
		<>
			<div
				className="threadCommentContent"
				//same as above
				style={{
					border: "slateBlue 1px solid",
					padding: "0.5rem 0.5rem",
					marginTop: "0.25rem",
					marginBottom: "0.25rem",
				}}
			>
				<CommentItem setIsCommenting={setIsCommenting} threadData={threadData} threadReply={threadReply} />
			</div>
			{isCommenting && <ThreadReplyForm />}

			{/* reply of reply */}
			<div className="repliesContainer" style={{ display: "flex", justifyContent: "end" }}>
				<ReplyContainer threadData={threadData} threadReply={threadReply} />
			</div>
		</>
	);
}

export default CommentContainer;
