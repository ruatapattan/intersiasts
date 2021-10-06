import SideBarLChat from "../components/sidebars/SideBarLChat";
import SideBarR from "../components/sidebars/SideBarR";
import UserBar from "../components/userbar.js/UserBar";

function Chat() {
	return (
		<>
			{/* <div className="chatContainer"> */}

			<section>
				<div className="container compartment navSpace">
					<SideBarLChat />

					<div className="center">
						<div className="centerContent"></div>
					</div>

					<SideBarR />
				</div>
			</section>

			<div className="textInputContainer container">
				<UserBar />

				<div className="textBar">
					<input type="text" name="chatInputBar" className="chatInputBar" />
					<button className="btn sendmsgbtn">Send</button>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default Chat;
