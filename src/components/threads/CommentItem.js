import { useContext, useState } from "react";
import { HandThumbsUp, Reply } from "react-bootstrap-icons";
import { createdAgo } from "../../services/getTimeService";
import ThreadReplyForm from "./ThreadReplyForm";
import { AuthContext } from "../../contexts/AuthContext";
import { PencilSquare } from "react-bootstrap-icons";
import { isOwner } from "../../services/isOwnerService";
const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

function CommentItem({ noMore, threadData, threadReply }) {
	const [isCommenting, setIsCommenting] = useState(false);
	const { community, poster, thread, threadLikes } = threadData;
	const { user } = useContext(AuthContext);
	// console.log("here2", threadReply.content);

	// const [commentType, setCommentType] = useState(type);

	// console.log("typeb4", commentType);

	return (
		<>
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
				<p
					style={{
						// margin: "1rem initial",
						padding: 0,
						fontSize: "0.7rem",
						color: "slategrey",
					}}
				>
					posted by: {poster?.username} {Math.round(createdAgo(threadReply?.createdAt).time)}{" "}
					{createdAgo(threadReply?.createdAt).unit} ago
				</p>
			</div>
			<p style={{ margin: 0 }}>{threadReply.content}</p>
			<div className="threadInfo" style={{ display: "flex", justifyContent: "end" }}>
				<div
					style={{
						margin: 0,
						padding: 0,
						fontSize: "0.8rem",
						display: "flex",
						alignItems: "center",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{threadReply?.ThreadLikes?.length}</span>
						<HandThumbsUp />
					</div>
					{noMore !== "yes" && (
						<div style={{ display: "flex", alignItems: "center" }}>
							<span
								style={{ margin: "0.25rem", cursor: "pointer" }}
								onClick={() => setIsCommenting((cur) => !cur)}
							>
								{threadReply?.ReplyReplies.length} Comment
							</span>
							<Reply />
						</div>
					)}
					{isOwner(user.id, threadReply?.replierId) && (
						<div style={{ display: "flex", alignItems: "center" }}>
							<span style={{ margin: "0.25rem" }}>Edit</span>
							<PencilSquare />
						</div>
					)}
				</div>
			</div>
			{noMore !== "yes" && isCommenting && (
				<ThreadReplyForm
					threadId={threadReply?.id}
					replierId={threadReply?.replierId}
					commentType={"replyReply"}
				/>
			)}
		</>
	);
}

export default CommentItem;
