import ExpSlide from "../components/ExpSlide";
import SideBarL from "../components/sidebars/SideBarL";
import SideBarR from "../components/sidebars/SideBarR";
// import PopupContainer from "../components/sidebars/PopupContainer";

//check if user is the owner of this profile via useparam and compare with token id

function userProfile() {
	return (
		<>
			<section>
				<div className="container compartment navSpace">
					<SideBarL />

					{/* <!-- For all popups --> */}
					{/* will be mapped */}
					{/* <PopupContainer /> */}

					<div className="center">
						<div className="centerContent">
							<div className="picFrame">
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
