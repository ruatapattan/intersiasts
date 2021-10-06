import CommunitySideBar from "../components/sidebars/CommunitySideBar";

import ThreadContainer from "../components/threads/ThreadContainer";

function Thread() {
	return (
		<>
			<div className="container compartment navSpace">
				<CommunitySideBar />
				<ThreadContainer />
			</div>
		</>
	);
}

export default Thread;
