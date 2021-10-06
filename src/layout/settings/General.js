function General() {
	return (
		<form action="" className="editFieldContainer">
			<div className="editCommunityName inputpair">
				<label for="editCommunityName">Community Name</label>
				<p className="m0">DnD [TH]</p>
			</div>
			<div className="editCommunityTagContainer inputpair">
				<label for="communityTagList">Community Tags</label>
				<div className="communityTagList">
					<button className="communityTagFrame addbtn">
						<strong>+</strong>
					</button>
					<div className="communityTagFrame communityTag">TTRPG</div>
					<div className="communityTagFrame communityTag">TH</div>
					<div className="communityTagFrame communityTag">Indoor</div>
				</div>
			</div>

			<div className="editCommunityPictureContainer inputpair">
				<label for="uploadImg editCommunityPicture">Community Picture</label>
				<input type="file" name="edeitCommunityPicture" />
			</div>

			<div className="editCommunityDescContainer inputpair">
				<label for="editCommunityDesc">Community Description</label>
				<textarea name="editCommunityDesc" cols="30" rows="10">
					Please join I have no friends.
				</textarea>
			</div>

			<div className="editbtnContainer">
				<input type="submit" value="Confirm Changes" className="confirmChanges editbtn btn" />
				<input type="button" value="Reset Changes" className="resetChanges editbtn btn" />
				<input type="button" value="Delete Community" className="deleteCommunity editbtn btn" />
			</div>
		</form>
	);
}

export default General;
