import SideBarLChat from "../components/sidebars/SideBarLChat";
import SideBarR from "../components/sidebars/SideBarR";
import UserBar from "../components/userbar.js/UserBar";

function Chat() {
	return (
		<>
			{/* <div class="chatContainer"> */}

			<section>
				<div class="container compartment navSpace">
					<SideBarLChat />

					<div class="center">
						<div class="centerContent"></div>
					</div>

					<SideBarR />
				</div>
			</section>

			<div class="textInputContainer container">
				<UserBar />

				<div class="textBar">
					<input type="text" name="chatInputBar" class="chatInputBar" />
					<button class="btn sendmsgbtn">Send</button>
				</div>
			</div>
			{/* </div> */}
		</>
	);
}

export default Chat;
