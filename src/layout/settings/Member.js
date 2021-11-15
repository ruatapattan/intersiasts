function Member() {
	return (
		<>
			<div className="memberSettingsTableContainer">
				<table className="memberSettingsTable">
					<tr>
						<th>Name</th>
						<th>Role</th>
						<th>Last Active</th>
					</tr>
					<tr>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td className="moreOption">
							<img src="./img/icon/more.png" alt="more" />
						</td>
					</tr>
					<tr>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td className="moreOption">
							<img src="./img/icon/more.png" alt="more" />
						</td>
					</tr>
				</table>
			</div>

			<div className="pageNav">
				<button className="pageNavbtn previousbtn btn">
					<a href="/">&#8249;</a>
				</button>
				<p>1/1</p>
				<button className="pageNavbtn nextbtn btn">
					<a href="/">&#8250;</a>
				</button>
			</div>
		</>
	);
}

export default Member;
