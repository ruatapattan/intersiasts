import { createContext, useEffect, useState } from "react";

const ThreadContext = createContext();
function ThreadContextProvider(props) {
	const [threadContextData, setThreadContextData] = useState({});

	return (
		<>
			<ThreadContext.Provider value={{ setThreadContextData, threadContextData }}>
				{props.children}
			</ThreadContext.Provider>
		</>
	);
}

export { ThreadContext, ThreadContextProvider };
