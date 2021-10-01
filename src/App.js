import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import { HeaderHereProvider } from "./components/contexts/HeaderHereContext";
import RouteContainer from "./layout/RouteContainer";
// import { useEffect } from "react";
// import { useHeaderHere } from "./components/contexts/HeaderHereContext";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<HeaderHereProvider>
					<RouteContainer />
				</HeaderHereProvider>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
