function Member() {
	return (
		<>
			<div class="memberSettingsTableContainer">
				<table class="memberSettingsTable">
					<tr>
						<th>Name</th>
						<th>Role</th>
						<th>Last Active</th>
					</tr>
					<tr>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td class="moreOption">
							<img src="./img/icon/more.png" alt="more" />
						</td>
					</tr>
					<tr>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td class="moreOption">
							<img src="./img/icon/more.png" alt="more" />
						</td>
					</tr>
				</table>
			</div>

			<div class="pageNav">
				<button class="pageNavbtn previousbtn btn">
					<a href="/">&#8249;</a>
				</button>
				<p>1/1</p>
				<button class="pageNavbtn nextbtn btn">
					<a href="/">&#8250;</a>
				</button>
			</div>
		</>
	);
}

export default Member;
