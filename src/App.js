import "./App.css";
import { HeaderHereProvider } from "./contexts/HeaderHereContext";
import RouteContainer from "./layout/RouteContainer";
import { CreateContextProvider } from "./contexts/CreateContext";
import { ThreadContextProvider } from "./contexts/ThreadContext";
import Footer from "./layout/footer/Footer";

function App() {
	// const { user } = useContext(AuthContext);
	// const role = user.userType ?? "guest"; //user is an obj

	// console.log(routes[role]);

	return (
		<div className="" style={{ height: "100%" }}>
			<HeaderHereProvider>
				<CreateContextProvider>
					<ThreadContextProvider>
						<RouteContainer />
						{/* <Footer /> */}
					</ThreadContextProvider>
				</CreateContextProvider>
			</HeaderHereProvider>
		</div>
	);
}

export default App;
