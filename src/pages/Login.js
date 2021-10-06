import SignContainer from "../layout/SignContainer";
import LoginForm from "../components/authComponents/LoginForm";

function Login() {
	return (
		// {/* <!-- set bg in css --> */}
		<SignContainer type={"login"}>
			<LoginForm />
		</SignContainer>
	);
}

export default Login;
