import { useContext, useEffect, useRef, useState } from "react";
import { HandThumbsUp, HandThumbsUpFill, PersonFill, Reply } from "react-bootstrap-icons";
import { createdAgo } from "../../services/getTimeService";
import ThreadReplyForm from "./ThreadReplyForm";
import { AuthContext } from "../../contexts/AuthContext";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { isOwner } from "../../services/isOwnerService";
import axios from "../../config/axios";

import Swal from "sweetalert2";

const INITIAL_DATA = {
	title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti nemo quisquam debitis magni voluptatibus nisi ut quo alias! Vitae neque aliquid debitis voluptates labore consequuntur nemo quam. Quod exercitationem fugit dolores magni quisquam officiis modi esse praesentium asperiores dolorem repellendus tempora, nulla quos vitae eius velit rem voluptas dolorum nisi veritatis voluptate laudantium quo. Cumque quibusdam velit id eligendi voluptatem, sint exercitationem eveniet maiores iste numquam consectetur odit minus esse perferendis? Modi, quae et? Deleniti sint enim tenetur dolor inventore corrupti ex odio pariatur?",
};

function CommentItem({ noMore, threadData, threadReply, type = "threadReply" }) {
	const [isCommenting, setIsCommenting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const { community, poster, thread, threadLikes } = threadData;
	const { user } = useContext(AuthContext);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [editInput, setEditInput] = useState(threadReply.content);
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState("");

	const ref = useRef();

	//member that both threaReplyId, and replyReplyId are passed in as this:
	// console.log("replyId", threadReply.id);

	// console.log((INITIAL_DATA.content.match(/\n/) || []).length);

	useEffect(() => {
		// console.log("myContainer..", ref.current);
		setScrollHeight(ref?.current?.scrollHeight);
	}, [isEditing]);

	// console.log("here2", threadReply);

	// const [commentType, setCommentType] = useState(type);

	// console.log("typeb4", commentType);

	useEffect(() => {
		const result = threadReply?.ThreadLikes?.filter((item) => item.likerId === user.id);
		// console.log(result);
		if (result?.length > 0) {
			setLiked(true);
		}
		setLikeCount(threadReply?.ThreadLikes?.length);
	}, [threadReply.threadLikes]);

	// console.log(liked);
	// console.log(likeCount);

	const handleClickCancelEdit = () => {
		setEditInput(threadReply.content);
		setIsEditing(false);
	};

	//update thread comment
	const handleSubmitThreadReplyUpdate = async (e) => {
		e.preventDefault();
		// send content, replyId

		await axios.put(`http://localhost:8080/reply/${threadReply.id}/edit`, { content: editInput });
		window.location.reload();
	};

	//update comment reply
	const handleSubmitReplyReplyUpdate = async (e) => {
		e.preventDefault();
		// // send content, replyId
		await axios.put(`http://localhost:8080/reply/replyReply/${threadReply.id}/edit`, { content: editInput });
		window.location.reload();
	};

	//like handling
	const handleClickLike = async () => {
		await axios.post(`http://localhost:8080/thread/${type}/${threadReply.id}/like`, {
			likerId: user.id,
		});
		setLiked((cur) => !cur);
		setLikeCount((cur) => cur + 1);
	};

	const handleClickUnLike = async () => {
		await axios.delete(`http://localhost:8080/thread/${type}/${threadReply.id}/unLike`, {
			data: { data: user.id },
		});
		setLiked((cur) => !cur);
		setLikeCount((cur) => cur - 1);
	};
	const arr = [];
	const xd = threadReply?.ReplyReplies?.map((item) => item.id);
	console.log("xd", xd);
	const handleClickThreadReplyDelete = async (e) => {
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
			if (thread) {
				const deleted =
					type === "replyReply"
						? //if deleting replyReply
						  await axios.delete(`http://localhost:8080/thread/replyReply/${threadReply.id}/delete`)
						: //if deleteing threadReply
						  await axios.delete(`http://localhost:8080/thread/threadReply/${threadReply.id}/delete`, {
								//send arrays of threadRepliesIds, replyRepliesIds

								data: {
									replyRepliesIds: threadReply?.ReplyReplies?.map((item) => item.id),
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
				done.isConfirmed && window.location.reload();
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
	const handleClickReplyReplyDelete = async (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="posterInfo" style={{ display: "flex", alignItems: "center" }}>
				{/* <img
					src=""
					alt=""
					style={{
						marginRight: "10px",
						border: "1px white solid",
						width: "2rem",
						height: "2rem",
					}}
				/> */}

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

				<p
					style={{
						// margin: "1rem initial",
						padding: 0,
						fontSize: "0.7rem",
						color: "slategrey",
					}}
				>
					{poster?.username} {Math.round(createdAgo(threadReply?.createdAt).time)}{" "}
					{createdAgo(threadReply?.createdAt).unit} ago
				</p>
			</div>
			{!isEditing && <p style={{ margin: 0 }}>{threadReply.content}</p>}

			{/* //edit comment */}
			{isEditing && (
				<form onSubmit={type === "replyReply" ? handleSubmitReplyReplyUpdate : handleSubmitThreadReplyUpdate}>
					<textarea
						ref={ref}
						value={editInput}
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
			<div className="threadInfo" style={{ display: "flex", justifyContent: "end" }}>
				<div
					style={{
						margin: 0,
						padding: 0,
						fontSize: "0.8rem",
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span style={{ margin: "0.25rem" }}>{likeCount}</span>
						{!liked ? (
							<HandThumbsUp onClick={handleClickLike} />
						) : (
							<HandThumbsUpFill style={{ color: "slateblue" }} onClick={handleClickUnLike} />
						)}
					</div>
					{noMore !== "yes" && (
						<div style={{ display: "flex", alignItems: "center" }}>
							<span
								style={{ margin: "0.25rem", cursor: "pointer" }}
								onClick={() => setIsCommenting((cur) => !cur)}
							>
								{threadReply?.ReplyReplies.length} Comment
							</span>
							<Reply />
						</div>
					)}
					{isOwner(user.id, threadReply?.replierId) && (
						<>
							<div
								style={{ display: "flex", alignItems: "center" }}
								onClick={() => setIsEditing((cur) => !cur)}
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
								onClick={handleClickThreadReplyDelete}
							>
								<span style={{ margin: "0.25rem" }}>Delete</span>
								<Trash />
							</div>
						</>
					)}
				</div>
			</div>
			{noMore !== "yes" && isCommenting && (
				<ThreadReplyForm
					threadId={threadReply?.id}
					replierId={threadReply?.replierId}
					commentType={"replyReply"}
				/>
			)}
		</>
	);
}

export default CommentItem;
