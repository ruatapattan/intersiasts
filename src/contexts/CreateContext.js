import { createContext, useState } from "react";

const createCommunity = {
	header: "Nothing catched your eyes? Then make your own!",
	title: "Community Name",
	content: "Community Description",
	contentPlaceholder: "Sell it...",
	type: "Create Community",
	picture: "Community Picture",
};
const createThread = {
	header: "Create your thread here!",
	title: "Thread Name",
	content: "Thread Description",
	contentPlaceholder: "What's up?...",
	type: "Create Thread",
	picture: "Image (optional)",
};

const CreateContext = createContext();

function CreateContextProvider(props) {
	const [showImage, setShowImage] = useState(null);
	return (
		<CreateContext.Provider value={{ createCommunity, createThread, showImage, setShowImage }}>
			{props.children}
		</CreateContext.Provider>
	);
}

export { CreateContextProvider, CreateContext };
