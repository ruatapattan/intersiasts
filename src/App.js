import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import CommunityGSettings from "./pages/CommunityGSettings";
import CommunityMSettings from "./pages/CommunityMSettings";
import CreateCommunity from "./pages/CreateCommunity";
import userProfile from "./pages/userProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/browse" component={Browse} />
					<Route exact path="/chat/:id" component={Chat} />
					<Route exact path="/community/:id" component={Community} />
					<Route exact path="/create/" component={CreateCommunity} />
					<Route exact path="/community/:id/settings/general" component={CommunityGSettings} />
					<Route exact path="/community/:id/settings/members" component={CommunityMSettings} />
					<Route exact path="/profile/:id" component={userProfile} />
					<Route path="/" component={Home} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
