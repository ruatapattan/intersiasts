function StatusBox() {
	return (
		<div class="onlineStatusContainer hidden">
			<p class="onlineStatusLabel popupLabel">
				Status: <span>Online</span>
			</p>

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
	);
}

export default StatusBox;
