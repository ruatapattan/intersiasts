const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

console.log(INITIAL_DATA.title.length);
console.log(INITIAL_DATA.content.length); //600 === tgt

const limit = (text) => {
	if (text.length > 600) {
		return text.slice(0, 599) + "...";
	}
	return text;
};

function ThreadItem() {
	return (
		<div
			className="threadItem"
			style={{
				border: "slateBlue 1px solid",
				padding: "0.5rem 0.5rem",
				marginTop: "0.25rem",
				marginBottom: "0.25rem",
			}}
		>
			{/* created by */}
			<div className="posterInfo">
				<p style={{ margin: 0, padding: 0, fontSize: "0.7rem", color: "slategrey" }}>
					posted by: jondoetho 2 hours ago
				</p>
			</div>

			{/* title */}
			<p style={{ fontSize: "2rem", margin: "0.2rem", color: "lightSkyBlue" }}>
				<strong>{INITIAL_DATA.title}</strong>
			</p>

			{/* content preview */}
			<p style={{ margin: 0 }}>{limit(INITIAL_DATA.content)}</p>

			<div className="threadInfo" style={{ display: "flex", justifyContent: "end" }}>
				<p style={{ margin: 0, padding: 0, fontSize: "0.7rem" }}>10 likes 0 comments</p>
			</div>
		</div>
	);
}

export default ThreadItem;
