import { HandThumbsUp, ChatLeft } from "react-bootstrap-icons";

const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

function ThreadContentItem() {
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
						posted by: jondoetho 2 hours ago
					</p>
				</div>

				{/* title */}
				<p style={{ fontSize: "2rem", margin: "0.2rem", color: "lightSkyBlue" }}>
					<strong>{INITIAL_DATA.title}</strong>
				</p>

				{/* content preview */}
				<p style={{ margin: 0 }}>{INITIAL_DATA.content}</p>

				<div className="threadInfo" style={{ display: "flex", justifyContent: "end", fontSize: "0.8rem" }}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{`32`}</span>
						<HandThumbsUp />
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{`1 comments`}</span>
						<ChatLeft />
					</div>
				</div>
			</div>
		</>
	);
}

export default ThreadContentItem;
