import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import CreateFormContainer from "./creations/CreateFormContainer";

function CreateContainer({ type }) {
	const { createCommunity, createThread } = useContext(CreateContext);
	// const context = useContext(CreateContext);

	// console.log("type: ", type);

	return (
		<div className="center communitySettingsCenter">
			<div className="centerContent communitySettingsCenterContent">
				<CreateFormContainer createInfo={type === "community" ? createCommunity : createThread} />
			</div>
		</div>
	);
}

export default CreateContainer;
