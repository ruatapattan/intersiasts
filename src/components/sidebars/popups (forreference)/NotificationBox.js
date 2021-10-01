function NotificationBox() {
	return (
		<div class="notiContainer hidden">
			<p class="notiLabel popupLabel">
				Notifications: <span>2</span>
			</p>

			<div class="notiItem popupItem">
				<img src="./img/pepe.png" alt="" />
				<div class="popupText">
					<h4>P€P€ in Broskis</h4>
					<p>In case you people forgot, we...</p>
				</div>
			</div>

			<div class="popupItem">
				<img src="./img/sprout.jpg" alt="" />
				<div class="popupText">
					<h4>sprout in Broskis</h4>
					<p>Shut up Kyle</p>
				</div>
			</div>

			<p class="popupShowMore">Show More</p>
		</div>
	);
}

export default NotificationBox;
