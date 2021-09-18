function Login() {
	return (
		<>
			{/* <!-- set bg in css --> */}
			<div class="container login">
				<div class="signContainer">
					<form action="#" class="signForm">
						<h1>Sign In</h1>
						<div class="inputpair">
							<input type="text" name="email" placeholder="Your email..." />
						</div>
						<div class="inputpair">
							<input type="text" name="password" placeholder="Password..." />
						</div>
						<input type="submit" value="Sign in" />
						<div class="inputpair checkbox">
							<input type="checkbox" name="remember" value="remember" />
							<label for="remember">Remember Me</label>
						</div>
						<p>
							<a href="./signup.html">Register</a>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
