function General() {
	return (
		<form action="" class="editFieldContainer">
			<div class="editCommunityName inputpair">
				<label for="editCommunityName">Community Name</label>
				<p class="m0">DnD [TH]</p>
			</div>
			<div class="editCommunityTagContainer inputpair">
				<label for="communityTagList">Community Tags</label>
				<div class="communityTagList">
					<button class="communityTagFrame addbtn">
						<strong>+</strong>
					</button>
					<div class="communityTagFrame communityTag">TTRPG</div>
					<div class="communityTagFrame communityTag">TH</div>
					<div class="communityTagFrame communityTag">Indoor</div>
				</div>
			</div>

			<div class="editCommunityPictureContainer inputpair">
				<label for="uploadImg editCommunityPicture">Community Picture</label>
				<input type="file" name="edeitCommunityPicture" />
			</div>

			<div class="editCommunityDescContainer inputpair">
				<label for="editCommunityDesc">Community Description</label>
				<textarea name="editCommunityDesc" cols="30" rows="10">
					Please join I have no friends.
				</textarea>
			</div>

			<div class="editbtnContainer">
				<input type="submit" value="Confirm Changes" class="confirmChanges editbtn btn" />
				<input type="button" value="Reseet Changes" class="resetChanges editbtn btn" />
				<input type="button" value="Delete Community" class="deleteCommunity editbtn btn" />
			</div>
		</form>
	);
}

export default General;
