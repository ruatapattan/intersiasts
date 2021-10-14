import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";
import validator from "validator";
import userValidate from "../../services/userValidate";
import passwordValidate from "../../services/passwordValidate";
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

	const handleInputUsername = (e) => {
		e.preventDefault();
		setUserInput((cur) => ({ ...cur, username: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, username: "" }));
		} else if (!userValidate.validateLength(e.target.value)) {
			setError((cur) => ({ ...cur, username: "username must be 6-12 characters long" }));
		} else if (!userValidate.validateCharacter(e.target.value)) {
			setError((cur) => ({
				...cur,
				username: "username must consists of alphabets, number, dash, or underscore only",
			}));
		} else setError((cur) => ({ ...cur, username: "" }));
	};

	const handleInputPassword = (e) => {
		setUserInput((cur) => ({ ...cur, password: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, password: "" }));
		} else if (e.target.value === "" && userInput.confirmPassword === "") {
			setError((cur) => ({ ...cur, password: "" }));
		} else if (!passwordValidate.validateCharacter(e.target.value)) {
			setError((cur) => ({
				...cur,
				password: "password must contain small letter, capitalized letter, and number",
			}));
		} else if (!passwordValidate.validateLength(e.target.value)) {
			setError((cur) => ({ ...cur, password: "password must be at least 8 characters long" }));
		} else {
			setError((cur) => ({ ...cur, password: "" }));
		}
	};

	const handleInputEmail = (e) => {
		console.log(validator.isEmail(e.target.value));
		setUserInput((cur) => ({ ...cur, email: e.target.value }));
		if (e.target.value === "") {
			setError((cur) => ({ ...cur, email: "" }));
		} else if (!validator.isEmail(e.target.value)) {
			setError((cur) => ({ ...cur, email: "invalid email error" }));
		} else {
			setError((cur) => ({ ...cur, email: "" }));
		}
	};

	const handleInputConfirmPassword = (e) => {
		setUserInput((cur) => ({ ...cur, confirmPassword: e.target.value }));

		if (userInput.password !== e.target.value) {
			setError((cur) => ({ ...cur, confirmPassword: "confirm password does not match!" }));
		} else {
			setError((cur) => ({ ...cur, confirmPassword: "" }));
		}
	};

	const handleInputBirthDate = (e) => {
		setUserInput((cur) => ({ ...cur, birthDate: e.target.value }));
		if (e.target.value) {
			setError((cur) => ({ ...cur, birthDate: "" }));
		}
	};

	const handleSubmitRegister = async (e) => {
		try {
			e.preventDefault();
			if (userInput.email === "") {
				setError((cur) => ({ ...cur, email: "email is required" }));
			}
			if (userInput.username === "") {
				setError((cur) => ({ ...cur, username: "username is required" }));
			}
			if (userInput.password === "") {
				setError((cur) => ({ ...cur, password: "password is required" }));
			}
			if (!userInput.birthDate) {
				setError((cur) => ({ ...cur, birthDate: "birth date is required" }));
			} else if (Object.values(error).every((item) => item === "")) {
				console.log("no error");
				await axios.post("/register", { ...userInput });
				history.push({
					pathname: "/login",
					state: { successMessage: "Account Created" },
					form: "register page",
				});
			}
		} catch (err) {
			console.log("err response below:");
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
			if (err.response && err.response.data.message.emailSame) {
				setError((cur) => ({ ...cur, email: "email already in use!" }));
			}
			// //birthdate error
			// if (!userInput.birthDate) {
			// 	setError((cur) => ({ ...cur, birthDate: "birth date is required" }));
			// }

			// if (!userInput.username) {
			// 	setError((cur) => ({ ...cur, username: "username is required" }));
			// }
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
					value={userInput?.username}
					onChange={handleInputUsername}
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
					onChange={handleInputEmail}
				/>
				{error.email && <p className="errorText">{error.email}</p>}
			</div>
			<div className="inputpair">
				<label for="password">Enter your password</label>
				<input
					type="password"
					name="password"
					placeholder="Must contain lower/uppercase, and number"
					value={userInput.password}
					onChange={handleInputPassword}
				/>
				{error.password && <p className="errorText">{error.password}</p>}
			</div>
			<div className="inputpair">
				<label for="confirmPassword">Confirm password</label>
				<input
					type="password"
					name="confirmPassword"
					placeholder="Just as you typed..."
					value={userInput.confirmPassword}
					onChange={handleInputConfirmPassword}
				/>
				{error.confirmPassword && <p className="errorText">{error.confirmPassword}</p>}
			</div>
			<div className="inputpair">
				<label for="birthDate">Enter your birthDate</label>
				<input type="date" name="birthDate" value={userInput.birthDate} onChange={handleInputBirthDate} />
				{error.birthDate && <p className="errorText">{error.birthDate}</p>}
			</div>

			<input type="submit" value="Sign me up" />
		</form>
	);
}

export default SignupForm;
