function PopupContainer(props) {
	return (
		<div className="popupBox">
			<div>
				<p className="notiLabel popupLabel">
					{/* Notifications: <span>2</span> */}
					Status: <span>Online</span>
				</p>

				{/* will be mapped */}
				<div className="onlineStatusItem popupItem">
					<div className="popupText">
						<p>Online</p>
					</div>
				</div>

				<div className="onlineStatusItem popupItem">
					<div className="popupText">
						<p>Away</p>
					</div>
				</div>

				<div className="onlineStatusItem popupItem">
					<div className="popupText">
						<p>Do not disturb</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopupContainer;
