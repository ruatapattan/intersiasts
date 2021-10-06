import ThreadItem from "./ThreadItem";

function ThreadList() {
	return (
		<div
			style={{
				border: "1px white solid",
				width: "90%",
				padding: "1rem",
			}}
		>
			<div>Threads</div>
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
			<ThreadItem />
		</div>
	);
}

export default ThreadList;
