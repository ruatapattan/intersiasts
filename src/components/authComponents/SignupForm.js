import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";

function SignupForm() {
	const [userInput, setUserInput] = useState({
		email: "",
		username: "",
		password: "",
		confirmPassword: "",
		birthDate: "",
	});

	const [error, setError] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		email: "",
		birthDate: "",
	});

	const history = useHistory();

	const handleSubmitRegister = async (e) => {
		try {
			e.preventDefault();

			if (!userInput.email) {
				setError((cur) => ({ ...cur, email: "email is required" }));
			}

			await axios.post("/register", { ...userInput });
			history.push({ pathname: "/login", state: { successMessage: "Account Created" }, form: "register page" });
		} catch (err) {
			console.dir(err.response.data);
			// console.dir(err.response.data.message.confirmPassword);
			//username errors
			if (err.response && err.response.data.message.usernameSame) {
				setError((cur) => ({ ...cur, username: err.response.data.message.usernameSame }));
			}
			if (err.response && err.response.data.message.usernameChar) {
				setError((cur) => ({ ...cur, username: err.response.data.message.usernameChar }));
			}
			if (err.response && err.response.data.message.usernameLength) {
				setError((cur) => ({ ...cur, username: err.response.data.message.usernameLength }));
			}

			//password errors
			if (err.response && err.response.data.message.passwordChar) {
				setError((cur) => ({ ...cur, password: err.response.data.message.passwordChar }));
			}
			if (err.response && err.response.data.message.passwordLength) {
				setError((cur) => ({ ...cur, password: err.response.data.message.passwordLength }));
			}
			//conf password error
			if (err.response && err.response.data.message.confirmPassword === "confirm password does not match") {
				setError((cur) => ({ ...cur, confirmPassword: err.response.data.message.confirmPassword }));
				// console.log(error.confirmPassword);
			}
			//email error
			if (err.response && err.response.data.message.emailChar) {
				setError((cur) => ({ ...cur, email: err.response.data.message.emailChar }));
			}
			if (err.response && err.response.data.message.emailLength) {
				setError((cur) => ({ ...cur, email: err.response.data.message.emailChar }));
			}
			//birthdate error
			if (!userInput.birthDate) {
				setError((cur) => ({ ...cur, birthDate: "birth date is required" }));
			}
		}
	};

	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<form className="signForm" onSubmit={handleSubmitRegister}>
			<div className="inputpair">
				<label for="dpname">Enter your username (cannot be changed later)</label>
				<input
					type="text"
					name="dpname"
					placeholder="At least 6 characters"
					value={userInput.username}
					onChange={(e) => setUserInput((cur) => ({ ...cur, username: e.target.value }))}
				/>
				{error.username && <p className="errorText">{error.username}</p>}
			</div>
			<div className="inputpair">
				<label for="email">Enter your email</label>
				<input
					type="text"
					name="email"
					placeholder="example@email.com"
					value={userInput.email}
					onChange={(e) => setUserInput((cur) => ({ ...cur, email: e.target.value }))}
				/>
				{error.email && <p className="errorText">{error.email}</p>}
			</div>
			<div className="inputpair">
				<label for="password">Enter your password</label>
				<input
					type="text"
					name="password"
					placeholder="Must contain lower/uppercase, and number"
					value={userInput.password}
					onChange={(e) => setUserInput((cur) => ({ ...cur, password: e.target.value }))}
				/>
				{error.password && <p className="errorText">{error.password}</p>}
			</div>
			<div className="inputpair">
				<label for="confirmPassword">Confirm password</label>
				<input
					type="text"
					name="confirmPassword"
					placeholder="Just as you typed..."
					value={userInput.confirmPassword}
					onChange={(e) => setUserInput((cur) => ({ ...cur, confirmPassword: e.target.value }))}
				/>
				{error.confirmPassword && <p className="errorText">{error.confirmPassword}</p>}
			</div>
			<div className="inputpair">
				<label for="birthDate">Enter your birthDate</label>
				<input
					type="date"
					name="birthDate"
					value={userInput.birthDate}
					onChange={(e) => setUserInput((cur) => ({ ...cur, birthDate: e.target.value }))}
				/>
				{error.birthDate && <p className="errorText">{error.birthDate}</p>}
			</div>

			<input type="submit" value="Sign me up" />
		</form>
	);
}

export default SignupForm;
