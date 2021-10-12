import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../config/axios";

function General({ community, tags, setShowImage }) {
	const history = useHistory();
	const params = useParams();
	console.log(community);
	const [tagList, setTagList] = useState(tags);
	const [addingTag, setaddingTag] = useState(false);
	const [editInput, setEditInput] = useState({
		image: null,
		content: null,
	});
	const [tagsSelected, setTagsSelected] = useState([]);
	const [tagsToSend, settagsToSend] = useState([]);

	useEffect(() => {
		setTagsSelected(tags?.map((item) => item.tagName));

		const fetch = async () => {
			const result = await axios.get("http://localhost:8080/createCommunity");
			setTagList([...result.data.tags]);
		};
		fetch();
	}, [tags]);

	useEffect(() => {
		setEditInput((cur) => ({ ...cur, content: community?.description }));
	}, [community]);

	const handleChangeTagSelect = (e) => {
		if (e.target.value !== "placeHolder" && !tagsSelected.includes(e.target.value)) {
			const clone = [...tagsSelected];
			console.log(clone);
			clone.push(e.target.value);
			setTagsSelected(clone);
			settagsToSend(clone);

			// setEditInput((cur) => ({ ...cur, tags: clone }));
		}
	};

	//use this to send
	console.log(tagsSelected);

	// console.log(community?.image?.public_id);

	// console.log(tagsSelected);
	// ({communityName, description, communityImage: result.secure_url });

	const handleClickToggleTag = (e) => {
		e.preventDefault();
		setaddingTag((cur) => !cur);
	};

	const handleChooseImage = (e) => {
		setShowImage(e.target.files[0]);
		setEditInput((cur) => ({ ...cur, image: e.target.files[0] }));
	};
	console.log(editInput.content);

	const handleSubmitEdit = async (e) => {
		try {
			e.preventDefault();
			const formData = new FormData();
			formData.append("description", editInput.content === community?.description ? null : editInput.content);
			formData.append("oldImagePublicId", community?.image?.public_id);
			formData.append("cloudinput", editInput.image);

			//formdata cant send data as arr, so you need to append each separately
			//but use the same fieldname, this way it'll become arr on arrival
			// for (let i = 0; i < tagsToSend.length; i++) {
			// 	formData.append("tagsToSend", tagsToSend[i]);
			// }

			for (let i = 0; i < tagsToSend.length; i++) {
				formData.append("tag", tagsToSend[i]);
			}

			await axios.put(`http://localhost:8080/community/${params.id}/settings/general`, formData);

			//redirect to created community
			// history.push(`/community/${res.data.community.id}`);
		} catch (err) {
			console.log(err);
		}
	};

	const handleClickDeleteCommunity = async (e) => {
		e.preventDefault();

		const result = await Swal.fire({
			title: "Are you sure?",
			text: "This will be gone forever!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
			background: "#23272a",
			customClass: {
				htmlContainer: "whiteText",
				title: "whiteText",
			},
		});
		if (result.isConfirmed) {
			await axios.delete(`/community/${params.id}/delete`);
			const done = await Swal.fire({
				icon: "success",
				title: "Deleted!",
				text: "Your community has been deleted.",
				background: "#23272a",
				customClass: {
					htmlContainer: "whiteText",
					title: "whiteText",
				},
			});
			alert("heyy");
			done.isConfirmed && history.push(`/browse`);
		} else {
			Swal.fire({
				icon: "error",
				title: "Error!",
				text: "An error occured, try again",
				background: "#23272a",
				customClass: {
					htmlContainer: "whiteText",
					title: "whiteText",
				},
			});
		}
	};

	return (
		<form action="" className="editFieldContainer" onSubmit={handleSubmitEdit}>
			<div className="editCommunityName inputpair">
				<label htmlFor="editCommunityName">Community Name</label>
				<p className="m0">{community?.name}</p>
			</div>
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
							{tagList?.map((item) => (
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
				<div>
					<p>Selected Tags:</p>
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						{tagsSelected?.map((item, idx) => (
							<button type="button" key={idx} className="communityTagFrame smallBtn ">
								{item}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="editCommunityPictureContainer inputpair">
				<label htmlFor="uploadImg editCommunityPicture">Community Picture</label>
				<input
					type="file"
					name="edeitCommunityPicture"
					// value={editInput.image}
					onChange={handleChooseImage}
				/>
			</div>

			<div className="editCommunityDescContainer inputpair">
				<label htmlFor="editCommunityDesc">Community Description</label>
				<textarea
					name="editCommunityDesc"
					cols="30"
					rows="10"
					value={editInput.content}
					onChange={(e) => setEditInput((cur) => ({ ...cur, content: e.target.value }))}
				/>
			</div>

			<div className="editbtnContainer" style={{ display: "flex", justifyContent: "space-around" }}>
				<input type="submit" value="Confirm Changes" className="confirmChanges editbtn btn" />
				{/* <input type="button" value="Reset Changes" className="resetChanges editbtn btn" /> */}
				<input
					type="button"
					value="Delete Community"
					className="deleteCommunity editbtn btn"
					onClick={handleClickDeleteCommunity}
				/>
			</div>
		</form>
	);
}

export default General;
