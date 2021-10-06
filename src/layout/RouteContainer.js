import { Route, Switch } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "./footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import routes from "../config/routes";

function RouteContainer() {
	const { userRole } = useContext(AuthContext);
	console.log(`userRole: `, userRole);

	const role = userRole;

	console.log(routes[role]);

	return (
		<>
			<Header />
			<Switch>
				{routes[role].allowedRoutes.map((item, idx) => {
					// console.log("item: ", item);
					return <Route key={idx} exact={item.path !== "/"} path={item.path} component={item.component} />;
				})}
			</Switch>
			<Footer />
		</>
	);
}

export default RouteContainer;
