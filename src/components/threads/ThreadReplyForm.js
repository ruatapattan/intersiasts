function ThreadReplyForm() {
	return (
		<>
			<form
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
					}}
					placeholder="Your thoughts?"
				/>
				<div
					className="buttonContainer"
					style={{ display: "flex", justifyContent: "flex-start", width: "100%", margin: 0 }}
				>
					<button className="smallBtn confirmChanges editbtn">Send Reply</button>
					<button className="smallBtn editbtn">Reset Reply</button>
				</div>
			</form>
		</>
	);
}

export default ThreadReplyForm;
