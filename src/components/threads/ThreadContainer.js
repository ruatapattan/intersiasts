import CommentContainer from "./CommentContainer";
import ThreadContentItem from "./ThreadContentItem";
import ThreadReplyForm from "./ThreadReplyForm";

function ThreadContainer({ threadData }) {
	// console.log("threadContainer", threadData.threadLikes);

	function sortReplies(a, b) {
		let keyA = new Date(a.createdAt),
			keyB = new Date(b.createdAt);
		// Compare the 2 dates
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	}

	//sorted now
	const sortedThreadReplies = threadData?.threadReplies?.sort(sortReplies);

	return (
		<section className="navSpace center w70" style={{ display: "flex", justifyContent: "center" }}>
			<div
				className="threadContainer"
				style={{
					width: "80%",
				}}
			>
				<ThreadContentItem threadData={threadData} />
				<ThreadReplyForm threadId={threadData?.thread?.id} replierId={threadData?.poster?.id} />

				{/* comments */}
				{sortedThreadReplies?.map((item) => (
					<CommentContainer key={item.id} threadData={threadData} threadReply={item} />
				))}
			</div>
		</section>
	);
}

export default ThreadContainer;
