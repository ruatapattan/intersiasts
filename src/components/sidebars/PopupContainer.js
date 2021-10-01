function PopupContainer(props) {
	return (
		<div className="popupBox">
			<div>
				<p class="notiLabel popupLabel">
					{/* Notifications: <span>2</span> */}
					Status: <span>Online</span>
				</p>

				{/* will be mapped */}
				<div class="onlineStatusItem popupItem">
					<div class="popupText">
						<p>Online</p>
					</div>
				</div>

				<div class="onlineStatusItem popupItem">
					<div class="popupText">
						<p>Away</p>
					</div>
				</div>

				<div class="onlineStatusItem popupItem">
					<div class="popupText">
						<p>Do not disturb</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopupContainer;
