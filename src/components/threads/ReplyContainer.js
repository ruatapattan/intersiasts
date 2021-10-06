import CommentItem from "./CommentItem";

function ReplyContainer() {
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
				<CommentItem />
			</div>
		</>
	);
}

export default ReplyContainer;
