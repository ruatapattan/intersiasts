import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Chat from "../pages/Chat";
import Community from "../pages/Community";
import CommunityGSettings from "../pages/CommunityGSettings";
import CreateCommunity from "../pages/CreateCommunity";
import userProfile from "../pages/userProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Thread from "../pages/Thread";
import CreateThread from "../pages/CreateThread";

const allPages = [
	{ path: "/browse", component: Browse },
	{ path: "/chat/:id", component: Chat },
	{ path: "/community/:id", component: Community },
	{ path: "/community/:id/thread/:id", component: Thread },
	{ path: "/community/:id/create", component: CreateThread },
	{ path: "/community/:id/settings/", component: CommunityGSettings },
	{ path: "/createCommunity", component: CreateCommunity },
	{ path: "/profile/:id", component: userProfile },
	{ path: "/", component: Home },
];

const routes = {
	user: {
		allowedRoutes: [...allPages],
	},
	admin: {
		allowedRoutes: [...allPages],
	},
	guest: {
		allowedRoutes: [
			{ path: "/browse", component: Browse },
			{ path: "/login", component: Login },
			{ path: "/signup", component: Signup },
			{ path: "/", component: Home },
		],
	},
};

export default routes;
