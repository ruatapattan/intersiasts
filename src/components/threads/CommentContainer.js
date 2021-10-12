// import { useState } from "react";
import CommentItem from "./CommentItem";
import ReplyContainer from "./ReplyContainer";
// import ThreadReplyForm from "./ThreadReplyForm";

function CommentContainer({ threadData, threadReply }) {
	// console.log(threadData);

	function sortReplies(a, b) {
		let keyA = new Date(a.createdAt),
			keyB = new Date(b.createdAt);
		// Compare the 2 dates
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	}

	//sorted now
	const sortedReplyReplies = threadReply?.ReplyReplies?.sort(sortReplies);

	// console.log("threadReply", threadReply);
	// console.log("sortedReplyReplies", threadReply.ReplyReplies);

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
				<CommentItem threadData={threadData} threadReply={threadReply} />
			</div>

			{/* reply of reply */}
			{/* revised */}
			<div className="repliesContainer" style={{ display: "flex", alignItems: "end", flexDirection: "column" }}>
				{sortedReplyReplies?.map((item) => (
					<ReplyContainer
						key={item.id}
						threadData={threadData}
						threadReply={item}
						style={{ display: "flex", justifyContent: "end" }}
					/>
				))}
			</div>
		</>
	);
}

export default CommentContainer;
