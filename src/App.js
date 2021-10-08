import "./App.css";
import { HeaderHereProvider } from "./contexts/HeaderHereContext";
import RouteContainer from "./layout/RouteContainer";
import { CreateContextProvider } from "./contexts/CreateContext";
import { ThreadContextProvider } from "./contexts/ThreadContext";

function App() {
	// const { user } = useContext(AuthContext);
	// const role = user.userType ?? "guest"; //user is an obj

	// console.log(routes[role]);

	return (
		<div className="">
			<HeaderHereProvider>
				<CreateContextProvider>
					<ThreadContextProvider>
						<RouteContainer />
					</ThreadContextProvider>
				</CreateContextProvider>
			</HeaderHereProvider>
		</div>
	);
}

export default App;
