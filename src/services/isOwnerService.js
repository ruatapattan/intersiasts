exports.isOwner = (userId, contentOwnerId) => {
	return userId === contentOwnerId;
};
