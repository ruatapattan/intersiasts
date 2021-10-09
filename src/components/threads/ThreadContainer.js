import CommentContainer from "./CommentContainer";
import ThreadContentItem from "./ThreadContentItem";
import ThreadReplyForm from "./ThreadReplyForm";

const arr = ["a", "b"];

function ThreadContainer({ threadData }) {
	// console.log("here", threadData);

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

				{/* var arr = [{
					"updated_at": "2012-01-01T06:25:24Z",
					"foo": "bar"
				},
				{
					"updated_at": "2012-01-09T11:25:13Z",
					"foo": "bar"
				},
				{
					"updated_at": "2012-01-05T04:13:24Z",
					"foo": "bar"
				}
				]

				arr.sort(function(a, b) {
				var keyA = new Date(a.updated_at),
					keyB = new Date(b.updated_at);
				// Compare the 2 dates
				if (keyA < keyB) return -1;
				if (keyA > keyB) return 1;
				return 0;
				}); */}

				{/* comments */}
				{sortedThreadReplies?.map((item) => (
					<CommentContainer threadData={threadData} threadReply={item} />
				))}
			</div>
		</section>
	);
}

export default ThreadContainer;
