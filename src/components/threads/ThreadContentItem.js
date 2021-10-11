import { useContext, useRef, useEffect, useState } from "react";
import { HandThumbsUp, ChatLeft, PencilSquare, Trash, HandThumbsUpFill, PersonFill } from "react-bootstrap-icons";
import { AuthContext } from "../../contexts/AuthContext";
import { createdAgo } from "../../services/getTimeService";
import { isOwner } from "../../services/isOwnerService";
import axios from "../../config/axios";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";

function ThreadContentItem({ threadData }) {
	const { community, poster, thread, threadLikes, threadReplies } = threadData;

	const { user } = useContext(AuthContext);
	const [isEditing, setIsEditing] = useState(false);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [editInput, setEditInput] = useState("");
	const [likeCount, setLikeCount] = useState("");
	const [liked, setLiked] = useState(false);
	const history = useHistory();
	const ref = useRef();

	// console.log(likeCount);

	console.log("posterPic", poster?.profilePic);
	console.log(threadData.images);

	// console.log("thread:", thread?.content);
	// console.log("thread state:", editInput);
	// console.log("thread: ", thread);
	// console.log("threadLike: ", threadData.threadLikes);
	// console.log(
	// "threadReply: ",
	// threadReplies?.forEach((item) => console.log(item));
	// );

	useEffect(() => {
		// console.log("myContainer..", ref.current);
		setScrollHeight(ref?.current?.scrollHeight);
	}, [isEditing]);

	useEffect(() => {
		setEditInput(thread?.content);
	}, [thread]);

	useEffect(() => {
		// if (threadLikes?.length > 0) {
		// console.log(threadLikes);
		const result = threadLikes?.filter((item) => item.likerId === user.id);
		if (result?.length > 0) {
			setLiked(true);
		}
		setLikeCount(threadLikes?.length);
		// }
	}, [threadLikes]);

	// const r1 = threadLikes?.length > 0 ? threadLikes.map((item) => item.likerId) : [];
	// console.log(r1);

	// r1?.forEach((item) => console.log(item === user.id));
	// const result = r1?.includes(user.id);

	// console.log(result);

	//delete whole thread
	const handleClickDel = async () => {
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
			if (thread) {
				const rrIdToAdd = [];
				threadReplies?.forEach((item) => item.ReplyReplies.forEach((elem) => rrIdToAdd.push(elem.id)));

				const deleted = await axios.delete(`http://localhost:8080/thread/${thread.id}/delete`, {
					//send arrays of threadRepliesIds, replyRepliesIds

					data: {
						threadRepliesIds: threadReplies?.map((item) => item.id),
						replyRepliesIds: rrIdToAdd,
					},
				});
				const done = await Swal.fire({
					icon: "success",
					title: "Deleted!",
					text: "Your file has been deleted.",
					background: "#23272a",
					customClass: {
						htmlContainer: "whiteText",
						title: "whiteText",
					},
				});
				done.isConfirmed && history.push(`/community/${community.id}`);
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
		}
	};

	const cursorAtEnd = (e) => {
		//hold onto value
		let temp_value = e.target.value;

		//delete value
		e.target.value = "";

		//set held value back
		e.target.value = temp_value;
	};

	const handleClickCancelEdit = () => {
		setEditInput(thread?.content);
		setIsEditing(false);
	};

	const handleSubmitEditThread = async (e) => {
		e.preventDefault();

		// send content, threadId

		await axios.put(`http://localhost:8080/thread/${thread.id}/edit`, { content: editInput });

		window.location.reload();
	};

	const handleClickLike = async () => {
		await axios.post(`http://localhost:8080/thread/${thread.id}/like`, {
			likerId: user.id,
		});
		setLiked((cur) => !cur);
		setLikeCount((cur) => cur + 1);
	};
	const handleClickUnLike = async () => {
		await axios.delete(`http://localhost:8080/thread/${thread.id}/unLike/`, {
			//in delete, payload can only be sent this way

			data: { data: user.id },
		});
		setLiked((cur) => !cur);
		// alert(likeCount);
		setLikeCount((cur) => cur - 1);
	};

	console.log("-------------------------------");

	return (
		<>
			<div
				className="threadMainContent"
				style={{
					border: "slateBlue 1px solid",
					padding: "0.5rem 0.5rem",
					marginTop: "0.25rem",
					marginBottom: "0.25rem",
				}}
			>
				<div className="posterInfo" style={{ display: "flex", alignItems: "center" }}>
					{poster?.profilePic ? (
						<img
							src={poster?.profilePic}
							alt=""
							style={{
								marginRight: "10px",
								border: "1px white solid",
								width: "2rem",
								height: "2rem",
							}}
						/>
					) : (
						<PersonFill
							style={{
								marginRight: "10px",
								border: "1px white solid",
								width: "2rem",
								height: "2rem",
							}}
						/>
					)}
					<p style={{ margin: 0, padding: 0, fontSize: "0.7rem", color: "slategrey" }}>
						{poster?.username} {Math.round(createdAgo(thread?.createdAt).time)}{" "}
						{createdAgo(thread?.createdAt).unit} ago
					</p>
				</div>

				{/* title */}
				<p style={{ fontSize: "2rem", margin: "0.2rem", color: "lightSkyBlue" }}>
					<strong>{thread?.title}</strong>
				</p>

				{/* content preview */}
				{!isEditing && (
					<>
						<p style={{ margin: 0 }}>{thread?.content}</p>
					</>
				)}

				{isEditing && (
					<form onSubmit={handleSubmitEditThread}>
						<textarea
							ref={ref}
							value={editInput}
							autoFocus={true}
							onFocus={cursorAtEnd}
							style={{
								width: "100%",
								boxSizing: "border-box",
								overflow: "auto",
								height: `${scrollHeight}px`,
								font: "15px electrolize",
								lineHeight: "1.5",
								padding: 0,
								overflowY: "auto",
								borderRadius: "10px",
							}}
							onChange={(e) => setEditInput(e.target.value)}
						/>
						<div
							className="buttonContainer"
							style={{ display: "flex", justifyContent: "flex-start", width: "100%", margin: 0 }}
						>
							<button type="submit" className="smallBtn confirmChanges editbtn">
								Edit Reply
							</button>
							<button type="button" className="smallBtn editbtn" onClick={handleClickCancelEdit}>
								Cancel Edit
							</button>
						</div>
					</form>
				)}

				{threadData.images?.length > 0 &&
					threadData?.images?.map((item) => (
						<img style={{ width: "100%", height: "100%" }} src={threadData.images} />
					))}

				<div className="threadInfo" style={{ display: "flex", justifyContent: "end", fontSize: "0.8rem" }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							cursor: "pointer",
							marginLeft: "0.25rem",
							marginRight: "0.25rem",
						}}
					>
						<span style={{ margin: "0.25rem" }}>{likeCount}</span>
						{!liked ? (
							<HandThumbsUp onClick={handleClickLike} />
						) : (
							<HandThumbsUpFill style={{ color: "slateblue" }} onClick={handleClickUnLike} />
						)}
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							cursor: "pointer",
							marginLeft: "0.25rem",
							marginRight: "0.25rem",
						}}
					>
						<span style={{ margin: "0.25rem" }}>{`${threadReplies?.length} comments`}</span>
						<ChatLeft />
					</div>
					{isOwner(user.id, poster?.id) && (
						<>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									cursor: "pointer",
									marginLeft: "0.25rem",
									marginRight: "0.25rem",
								}}
								onClick={(e) => setIsEditing((cur) => !cur)}
							>
								<span style={{ margin: "0.25rem" }}>Edit</span>
								<PencilSquare />
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									cursor: "pointer",
									marginLeft: "0.25rem",
									marginRight: "0.25rem",
								}}
								onClick={handleClickDel}
							>
								<span style={{ margin: "0.25rem" }}>Delete</span>
								<Trash />
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default ThreadContentItem;
