exports.isMember = (userId, memberIdList) => {
	// console.log(userId);
	// console.log(memberIdList);
	if (memberIdList?.includes(userId)) {
		return true;
	} else return false;
};
