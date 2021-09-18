function Signup() {
	return (
		<>
			{/* <!-- set bg in css --> */}
			<div class="container signup">
				<div class="signContainer">
					<h1>Sign up first! It won't take long.</h1>
					<form action="/" class="signForm">
						<div class="inputpair">
							<label for="email">Enter your email</label>
							<input type="text" name="email" placeholder="example@email.com" />
						</div>
						<div class="inputpair">
							<label for="password">Enter your password</label>
							<input type="text" name="password" placeholder="At least 8 characters" />
						</div>
						<div class="inputpair">
							<label for="confirmPassword">Confirm password</label>
							<input type="text" name="confirmPassword" placeholder="Just as you typed..." />
						</div>
						<div class="inputpair">
							<label for="birthDate">Enter your birthDate</label>
							<input type="date" name="birthDate" />
						</div>
						<div class="inputpair">
							<label for="dpname">Enter your display name (can be changed later)</label>
							<input type="text" name="dpname" placeholder="At least 6 characters" />
						</div>
						<input type="submit" value="Sign me up" />
					</form>
				</div>
			</div>
		</>
	);
}

export default Signup;
