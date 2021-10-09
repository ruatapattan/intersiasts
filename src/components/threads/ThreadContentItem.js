import { useContext, useRef, useEffect, useState } from "react";
import { HandThumbsUp, ChatLeft, PencilSquare } from "react-bootstrap-icons";
import { AuthContext } from "../../contexts/AuthContext";
import { createdAgo } from "../../services/getTimeService";
import { isOwner } from "../../services/isOwnerService";
import axios from "../../config/axios";
const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

function ThreadContentItem({ threadData }) {
	const { community, poster, thread, threadLikes, threadReplies } = threadData;
	const { user } = useContext(AuthContext);
	const [isEditing, setIsEditing] = useState(false);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [editInput, setEditInput] = useState("");
	const ref = useRef();

	console.log("thread:", thread?.content);
	console.log("thread state:", editInput);

	useEffect(() => {
		// console.log("myContainer..", ref.current);
		setScrollHeight(ref?.current?.scrollHeight);
	}, [isEditing]);

	useEffect(() => {
		setEditInput(thread?.content);
	}, [thread]);

	const handleClickCancelEdit = () => {
		setEditInput(thread?.content);
		setIsEditing(false);
	};

	const handleSubmitEditThread = async (e) => {
		e.preventDefault();
		// send content, threadId

		await axios.put(`http://localhost:8080/thread/${thread.id}/edit`, { content: editInput });
		// window.location.reload();
	};

	return (
		<>
			<div
				className="threadMainContent"
				style={{
					border: "slateBlue 1px solid",
					padding: "0.5rem 0.5rem",
					marginTop: "0.25rem",
					marginBottom: "0.25rem",
				}}
			>
				<div className="posterInfo" style={{ display: "flex", alignItems: "center" }}>
					<img
						src=""
						alt=""
						style={{
							marginRight: "10px",
							border: "1px white solid",
							width: "2rem",
							height: "2rem",
						}}
					/>
					<p style={{ margin: 0, padding: 0, fontSize: "0.7rem", color: "slategrey" }}>
						posted by: {poster?.username} {Math.round(createdAgo(thread?.createdAt).time)}{" "}
						{createdAgo(thread?.createdAt).unit} ago
					</p>
				</div>

				{/* title */}
				<p style={{ fontSize: "2rem", margin: "0.2rem", color: "lightSkyBlue" }}>
					<strong>{thread?.title}</strong>
				</p>

				{/* content preview */}
				{!isEditing && <p style={{ margin: 0 }}>{thread?.content}</p>}
				{isEditing && (
					<form onSubmit={handleSubmitEditThread}>
						<textarea
							ref={ref}
							value={editInput}
							style={{
								width: "100%",
								boxSizing: "border-box",
								overflow: "auto",
								height: `${scrollHeight}px`,
								font: "15px electrolize",
								lineHeight: "1.5",
								padding: 0,
								overflowY: "auto",
								borderRadius: "10px",
							}}
							onChange={(e) => setEditInput(e.target.value)}
						/>
						<div
							className="buttonContainer"
							style={{ display: "flex", justifyContent: "flex-start", width: "100%", margin: 0 }}
						>
							<button type="submit" className="smallBtn confirmChanges editbtn">
								Edit Reply
							</button>
							<button type="button" className="smallBtn editbtn" onClick={handleClickCancelEdit}>
								Cancel Edit
							</button>
						</div>
					</form>
				)}

				<div
					className="threadInfo"
					style={{ display: "flex", justifyContent: "end", fontSize: "0.8rem", cursor: "pointer" }}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{threadLikes?.length}</span>
						<HandThumbsUp />
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{`${threadReplies?.length} comments`}</span>
						<ChatLeft />
					</div>
					{isOwner(user.id, poster?.id) && (
						<div
							style={{ display: "flex", alignItems: "center" }}
							onClick={(e) => setIsEditing((cur) => !cur)}
						>
							<span style={{ margin: "0.25rem" }}>Edit</span>
							<PencilSquare />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ThreadContentItem;
