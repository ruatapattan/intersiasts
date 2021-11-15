function SignContainer(props) {
	//clasname: login for login, signup for signup bgimg

	return (
		<>
			<div className={`container navSpace ${props.type} `}>
				<div className="signContainer">{props.children}</div>
			</div>
		</>
	);
}

export default SignContainer;
