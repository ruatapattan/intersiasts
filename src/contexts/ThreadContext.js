import { createContext, useEffect, useState } from "react";

const ThreadContext = createContext();
function ThreadContextProvider(props) {
	const [threadData, setThreadData] = useState({});

	return (
		<>
			<ThreadContext.Provider value={{ setThreadData, threadData }}>{props.children}</ThreadContext.Provider>
		</>
	);
}

export { ThreadContext, ThreadContextProvider };
