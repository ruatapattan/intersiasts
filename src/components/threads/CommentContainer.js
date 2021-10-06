import CommentItem from "./CommentItem";
import ReplyContainer from "./ReplyContainer";

function CommentContainer() {
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
				<CommentItem />
			</div>
			<div className="repliesContainer" style={{ display: "flex", justifyContent: "end" }}>
				<ReplyContainer />
			</div>
		</>
	);
}

export default CommentContainer;
