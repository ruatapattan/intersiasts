import CommentItem from "./CommentItem";

function ReplyContainer({ threadData, threadReply }) {
	// function sortReplies(a, b) {
	// 	let keyA = new Date(a.createdAt),
	// 		keyB = new Date(b.createdAt);
	// 	// Compare the 2 dates
	// 	if (keyA < keyB) return -1;
	// 	if (keyA > keyB) return 1;
	// 	return 0;
	// }

	//sorted now
	// const sortedReplyReplies = threadReply?.ReplyReplies?.sort(sortReplies);

	return (
		<>
			<div
				className="threadCommentContent"
				//same as above
				style={{
					width: "80%",
					// display: "flex",
					// justifyContent: "end",
					border: "slateBlue 1px solid",
					padding: "0.5rem 0.5rem",
					marginTop: "0.25rem",
					marginBottom: "0.25rem",
				}}
			>
				<CommentItem noMore={"yes"} threadData={threadData} threadReply={threadReply} type="replyReply" />
			</div>
		</>
	);
}

export default ReplyContainer;
