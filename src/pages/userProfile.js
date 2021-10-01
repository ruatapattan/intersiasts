import ExpSlide from "../components/ExpSlide";
import SideBarL from "../components/sidebars/SideBarL";
import SideBarR from "../components/sidebars/SideBarR";
// import PopupContainer from "../components/sidebars/PopupContainer";

function userProfile() {
	return (
		<>
			<section>
				<div class="container compartment navSpace">
					<SideBarL />

					{/* <!-- For all popups --> */}
					{/* will be mapped */}
					{/* <PopupContainer /> */}

					<div class="center">
						<div class="centerContent">
							<div class="picFrame">
								<img src="./img/pfpic.png" alt="" />
							</div>
							<p>xxxNoobMaster69xxx</p>
							{/* <!-- <br> --> */}
							<ExpSlide />
						</div>
					</div>

					<SideBarR />
				</div>
			</section>
		</>
	);
}

export default userProfile;
