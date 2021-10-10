import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

function ThreadReplyForm({ threadId, replierId, commentType }) {
	const [commentInput, setCommentInput] = useState("");
	// console.log(threadId, replierId);

	// console.log("commentType", commentType);

	// console.log("id: ", threadId);

	const handleSubmitComment = async (e) => {
		try {
			e.preventDefault();

			axios.post("http://localhost:8080/reply/create", {
				content: commentInput,
				threadId,
				replierId,
			});

			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmitCommentReply = async (e) => {
		// threaReplyId is passed as threadId for a replyReply
		e.preventDefault();
		await axios.post(`http://localhost:8080/reply/${threadId}/replyReply/create`, {
			content: commentInput,
			threadReplyId: threadId,
			replierId: replierId,
		});
		window.location.reload();
	};

	return (
		<div
			style={{
				border: "1px solid white",
				boxSizing: "border-box",

				padding: "1rem",
				margin: "1rem",
				textAlign: "center",
				borderRadius: "10px",
			}}
		>
			<div>
				<p style={{ color: "white", textAlign: "left" }}>Comment</p>
			</div>
			<form
				onSubmit={commentType === "replyReply" ? handleSubmitCommentReply : handleSubmitComment}
				className="replyFormContainer"
				style={{
					width: "100%",
					// border: "1px skyBlue solid",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					boxSizing: "border-box",
					marginTop: "1rem",
					marginBottom: "1rem",
				}}
			>
				<textarea
					type="text"
					name="replyInput"
					rows="10"
					style={{
						width: "100%",
						boxSizing: "border-box",
						borderRadius: "10px",
					}}
					placeholder="Your thoughts?"
					value={commentInput}
					onChange={(e) => setCommentInput(e.target.value)}
				/>
				<div
					className="buttonContainer"
					style={{ display: "flex", justifyContent: "flex-start", width: "100%", margin: 0 }}
				>
					<button type="submit" className="smallBtn confirmChanges editbtn">
						Send Reply
					</button>
					<button type="button" className="smallBtn editbtn" onClick={() => setCommentInput("")}>
						Reset Reply
					</button>
				</div>
			</form>
		</div>
	);
}

export default ThreadReplyForm;
