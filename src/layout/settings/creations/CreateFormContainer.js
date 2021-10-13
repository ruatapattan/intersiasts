import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../../config/axios";
import { AuthContext } from "../../../contexts/AuthContext";
import { CreateContext } from "../../../contexts/CreateContext";

// const MOCK_TAGLIST = [
// 	{ id: 1, tagName: "indoor" },
// 	{ id: 2, tagName: "gaming" },
// 	{ id: 4, tagName: "TH" },
// 	{ id: 5, tagName: "TaH" },
// 	{ id: 6, tagName: "THs" },
// 	{ id: 7, tagName: "THc" },
// 	{ id: 8, tagName: "THwfafclamclacmakcmsapcm" },
// 	{ id: 9, tagName: "THsaamampoasmoapsmosmfapmpsamcamcpodskmpocma" },
// ];

function CreateFormContainer({ createInfo }) {
	// console.log(createInfo);
	// looks like this = {
	// 	header: "Create your thread here!",
	// 	title: "Thread Name",
	// 	content: "Thread Description",
	// 	contentPlaceholder: "What's up?...",
	// type: 'Create Community'
	// };

	const { setShowImage } = useContext(CreateContext);

	const history = useHistory();
	const params = useParams();

	const [tagList, setTagList] = useState([]);
	const [addingTag, setaddingTag] = useState(false);

	const [createInput, setCreateInput] = useState({
		name: "",
		tags: [
			/*indoor,gaming,TH*/
		],
		image: null,
		content: "",
	});
	const [tagsSelected, setTagsSelected] = useState([]);

	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (createInfo.type === "Create Community") {
			const fetch = async () => {
				const result = await axios.get("http://localhost:8080/createCommunity");
				setTagList([...result.data.tags]);
			};
			fetch();
		}
	}, []);

	const handleChangeTagSelect = (e) => {
		if (e.target.value !== "placeHolder" && !tagsSelected.includes(e.target.value)) {
			const clone = [...tagsSelected];
			clone.push(e.target.value);
			setTagsSelected(clone);

			setCreateInput((cur) => ({ ...cur, tags: clone }));
		}
	};
	// console.log(tagsSelected);
	// ({communityName, description, communityImage: result.secure_url });

	const handleClickToggleTag = (e) => {
		e.preventDefault();
		setaddingTag((cur) => !cur);
	};

	const handleChooseImage = (e) => {
		e.preventDefault();

		setShowImage(e.target.files[0]);
		setCreateInput((cur) => ({ ...cur, image: e.target.files[0] }));
	};

	const handleClickSubmit = async (e) => {
		e.preventDefault();
		try {
			if (createInfo.type === "Create Community") {
				const formData = new FormData();
				formData.append("communityName", createInput.name);
				formData.append("userId", user.id);
				formData.append("description", createInput.content);
				formData.append("cloudinput", createInput.image);

				//formdata cant send data as arr, so you need to append each separately
				//but use the same fieldname, this way it'll become arr on arrival
				for (let i = 0; i < createInput.tags.length; i++) {
					formData.append("tag", createInput.tags[i]);
				}

				const res = await axios.post("http://localhost:8080/createCommunity", formData);

				//redirect to created community
				history.push(`/community/${res.data.community.id}`);
			} else {
				const formData = new FormData();
				formData.append("title", createInput.name);
				formData.append("content", createInput.content);
				formData.append("posterId", user.id);
				formData.append("cloudinput", createInput.image);

				const res = await axios.post(`http://localhost:8080/community/${params.id}/createThread`, formData);

				//redirect to created thread
				history.push(`/community/${params.id}/thread/${res.data.thread.id}`);
			}
		} catch (err) {
			console.dir(err);
		}
	};

	// console.log(createInput);
	console.log("params", params);

	return (
		<>
			<p className="t40 underline">{createInfo.header}</p>
			<form action="" className="editFieldContainer" onSubmit={handleClickSubmit}>
				<div className="editCommunityName inputpair">
					<label htmlFor="editCommunityName">{createInfo.title}</label>
					<input
						type="text"
						className="editCommunityName"
						placeholder="Cannot be changed later"
						value={createInput.name}
						onChange={(e) => setCreateInput((cur) => ({ ...cur, name: e.target.value }))}
					/>
				</div>

				{createInfo.type === "Create Community" && (
					<>
						<div className="editCommunityTagContainer inputpair">
							<label htmlFor="communityTagList">Community Tags</label>
							<div className="communityTagList">
								<button
									className={`communityTagFrame ${addingTag ? "smallBtn" : "addbtn"}`}
									onClick={handleClickToggleTag}
								>
									{addingTag ? "Done" : <strong>+</strong>}
								</button>

								{addingTag && (
									<select className="communityTagFrame" onChange={handleChangeTagSelect}>
										<option defaultValue="true" value="placeHolder">
											Select tag(s)
										</option>
										{tagList.map((item) => (
											<option
												key={item.id}
												value={item.tagName}
												className="tagOption"
												style={{
													background: "#23272a",
												}}
											>
												{item.tagName}
											</option>
										))}
									</select>
								)}
							</div>
						</div>
						{tagsSelected.length > 0 && (
							<div>
								<p>Selected Tags:</p>
								<div style={{ display: "flex", flexWrap: "wrap" }}>
									{tagsSelected.map((item, idx) => (
										<button key={idx} className="communityTagFrame smallBtn ">
											{item}
										</button>
									))}
								</div>
							</div>
						)}
					</>
				)}

				<div className="editCommunityPictureContainer inputpair">
					<label htmlFor="uploadImg editCommunityPicture">{createInfo.picture}</label>
					<input
						type="file"
						name="edeitCommunityPicture"
						// value={createInput.image}
						onChange={handleChooseImage}
					/>
				</div>

				<div className="editCommunityDescContainer inputpair">
					<label htmlFor="editCommunityDesc">{createInfo.content}</label>
					<textarea
						name="editCommunityDesc"
						cols="30"
						rows="10"
						placeholder={createInfo.contentPlaceholder}
						value={createInput.content}
						onChange={(e) => setCreateInput((cur) => ({ ...cur, content: e.target.value }))}
					></textarea>
				</div>

				<div className="editbtnContainer">
					<input type="submit" value={createInfo.type} className="createbtn btn" />
				</div>
			</form>
		</>
	);
}

export default CreateFormContainer;
