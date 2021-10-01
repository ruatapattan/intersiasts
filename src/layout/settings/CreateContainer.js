function CreateContainer() {
	return (
		<div class="center communitySettingsCenter">
			<div class="centerContent communitySettingsCenterContent">
				<p class="t40 underline">Nothing catched your eyes? Then make your own</p>

				<form action="" class="editFieldContainer">
					<div class="editCommunityName inputpair">
						<label for="editCommunityName">Community Name*</label>
						<input type="text" class="editCommunityName" placeholder="Cannot be changed later" />
					</div>
					<div class="editCommunityTagContainer inputpair">
						<label for="communityTagList">Community Tags</label>
						<div class="communityTagList">
							<button class="communityTagFrame addbtn">
								<strong>+</strong>
							</button>
						</div>
					</div>

					<div class="editCommunityPictureContainer inputpair">
						<label for="uploadImg editCommunityPicture">Community Picture</label>
						<input type="file" name="edeitCommunityPicture" />
					</div>

					<div class="editCommunityDescContainer inputpair">
						<label for="editCommunityDesc">Community Description</label>
						<textarea name="editCommunityDesc" cols="30" rows="10" placeholder="sell it"></textarea>
					</div>

					<div class="editbtnContainer">
						<input type="submit" value="Create Community" class="createbtn btn" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateContainer;
