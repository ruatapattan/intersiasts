import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Chat from "../pages/Chat";
import Community from "../pages/Community";
import CommunityGSettings from "../pages/CommunityGSettings";
import CommunityMSettings from "../pages/CommunityMSettings";
import CreateCommunity from "../pages/CreateCommunity";
import userProfile from "../pages/userProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../layout/header/Header";
// import { useEffect } from "react";

function RouteContainer() {
	// 	const location = useLocation();

	// 	console.log(location);

	// 	useEffect(() => {
	// 		console.log(location.pathname);
	// 	}, [location]);

	return (
		<>
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
		</>
	);
}

export default RouteContainer;
