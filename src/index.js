import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { HeaderHereProvider } from "./contexts/HeaderHereContext";
import Footer from "./layout/footer/Footer";
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<HeaderHereProvider>
					<App />
					<Footer />
				</HeaderHereProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
