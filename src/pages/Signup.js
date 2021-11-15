import SignupForm from "../components/authComponents/SignupForm";
import SignContainer from "../layout/SignContainer";

function Signup() {
	return (
		// {/* <!-- set bg in css --> */}

		<SignContainer type={"signup"}>
			<h1>Sign up first! It won't take long.</h1>
			<SignupForm />
		</SignContainer>
	);
}

export default Signup;
