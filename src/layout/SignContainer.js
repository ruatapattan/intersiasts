function SignContainer(props) {
	//clasname: login for login, signup for signup bgimg

	return (
		<>
			<div class={`container navSpace ${props.type} `}>
				<div class="signContainer">{props.children}</div>
			</div>
		</>
	);
}

export default SignContainer;
