import CommentContainer from "./CommentContainer";
import ThreadContentItem from "./ThreadContentItem";
import ThreadReplyForm from "./ThreadReplyForm";

function ThreadContainer() {
	return (
		<section className="navSpace center w70" style={{ display: "flex", justifyContent: "center" }}>
			<div
				className="threadContainer"
				style={{
					width: "80%",
				}}
			>
				<ThreadContentItem />
				<ThreadReplyForm />

				{/* comments */}
				<CommentContainer />
				<CommentContainer />
				<CommentContainer />
				<CommentContainer />
			</div>
		</section>
	);
}

export default ThreadContainer;
