import ThreadItem from "./ThreadItem";

function ThreadList({ communityData }) {
	return (
		<div
			style={{
				border: "1px white solid",
				width: "90%",
				padding: "1rem",
			}}
		>
			<div>Threads</div>

			{/* //map threads after useEffect took effect */}
			{communityData?.threads?.map((item) => (
				<ThreadItem threadData={item} />
			))}
		</div>
	);
}

export default ThreadList;
