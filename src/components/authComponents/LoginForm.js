import axios from "axios";
import { useContext, useState } from "react";
import { setToken } from "../../services/localstorage";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";
import { AuthContext } from "../../contexts/AuthContext";
function LoginForm() {
	const [userInput, setUserInput] = useState({
		username: "",
		password: "",
	});

	const { setUser, setUserRole } = useContext(AuthContext);
	const [error, setError] = useState("");

	const history = useHistory();

	const handleSubmitLogin = async (e) => {
		try {
			e.preventDefault();

			const result = await axios.post("/login", {
				username: userInput.username,
				password: userInput.password,
			});
			setToken(result.data.token);
			setUser(jwtDecode(result.data.token)); //obj from authcontroller
			const decoded = jwtDecode(result.data.token).userType;
			setUserRole(decoded);

			history.push("/");
		} catch (err) {
			console.dir(err);
			if (err.response && err.response.status === 400 && err.response.data.name === "loginError") {
				setError(err.response.data.message);
			}
		}
	};

	return (
		<form className="signForm" onSubmit={handleSubmitLogin}>
			<h1>Sign In</h1>
			<div className="inputpair">
				<input
					type="text"
					name="username"
					placeholder="Your username..."
					value={userInput.username}
					onChange={(e) => setUserInput((cur) => ({ ...cur, username: e.target.value }))}
				/>
			</div>
			<div className="inputpair">
				<input
					type="password"
					name="password"
					placeholder="Password..."
					value={userInput.password}
					onChange={(e) => setUserInput((cur) => ({ ...cur, password: e.target.value }))}
				/>
			</div>
			{error && <p className="errorText">{error}</p>}
			<input type="submit" value="Sign in" />
			<div className="inputpair checkbox">
				<input type="checkbox" name="remember" value="remember" />
				<label for="remember">Remember Me</label>
			</div>
			<p>
				<a href="./signup.html">Register</a>
			</p>
		</form>
	);
}

export default LoginForm;
