import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HandThumbsUp, Reply } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { createdAgo } from "../../services/getTimeService";
const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

const MOCK_LIKE = 0;
const MOCK_COMMENTS = [
	{
		id: 1,
		content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore.",
		likeCount: 0,
		threadId: 1,
		replierId: 12,
	},
	{
		id: 2,
		content: "Lorem ipsum dolor sit amet.",
		likeCount: 10,
		threadId: 1,
		replierId: 1,
	},
];

// console.log(INITIAL_DATA.title.length);
// console.log(INITIAL_DATA.content.length); //600 === tgt

const limit = (text) => {
	if (text.length > 600) {
		return text.slice(0, 599) + "...";
	}
	return text;
};

function ThreadItem({ threadData }) {
	const { user } = useContext(AuthContext);

	const params = useParams();

	return (
		<div
			// to={`/community/${user.id}/thread/${id}`}
			className="threadItem"
			style={{
				border: "slateBlue 1px solid",
				padding: "0.5rem 0.5rem",
				marginTop: "0.25rem",
				marginBottom: "0.25rem",
			}}
		>
			<Link to={`/community/${params.id}/thread/${threadData.id}`}>
				{/* created by */}
				<div className="posterInfo">
					<p style={{ margin: 0, padding: 0, fontSize: "0.7rem", color: "slategrey" }}>
						{`posted by: ${threadData.User.username} ${Math.round(createdAgo(threadData.createdAt).time)} ${
							createdAgo(threadData.createdAt).unit
						} ago`}
					</p>
				</div>

				{/* title */}
				<p style={{ fontSize: "2rem", margin: "0.2rem", color: "lightSkyBlue" }}>
					<strong>{threadData.title}</strong>
				</p>

				{/* content preview */}
				<p style={{ margin: 0 }}>{limit(threadData?.content)}</p>

				<div className="threadInfo" style={{ display: "flex", justifyContent: "end" }}>
					{/* <p style={{ margin: 0, padding: 0, fontSize: "0.7rem" }}>10 likes 0 comments</p> */}
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
							<span style={{ margin: "0.25rem" }}>{threadData?.ThreadLikes?.length}</span>
							<HandThumbsUp />
						</div>
						<div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
							<span style={{ margin: "0.25rem" }}>{threadData?.ThreadReplies?.length} Comments</span>
							<Reply />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ThreadItem;