import { useContext } from "react";
import { HandThumbsUp, ChatLeft, PencilSquare } from "react-bootstrap-icons";
import { AuthContext } from "../../contexts/AuthContext";
import { createdAgo } from "../../services/getTimeService";
import { isOwner } from "../../services/isOwnerService";

const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

function ThreadContentItem({ threadData }) {
	const { community, poster, thread, threadLikes, threadReplies } = threadData;
	const { user } = useContext(AuthContext);

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
				<p style={{ margin: 0 }}>{thread?.content}</p>

				<div className="threadInfo" style={{ display: "flex", justifyContent: "end", fontSize: "0.8rem" }}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{threadLikes?.length}</span>
						<HandThumbsUp />
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{`${threadReplies?.length} comments`}</span>
						<ChatLeft />
					</div>
					{isOwner(user.id, poster?.id) && (
						<div style={{ display: "flex", alignItems: "center" }}>
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
