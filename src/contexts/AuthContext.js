import { createContext, useState } from "react";
import { user as initialUser } from "../services/localstorage";

const AuthContext = createContext();

function AuthContextProvider(props) {
	const [user, setUser] = useState(initialUser);
	const [userRole, setUserRole] = useState(initialUser?.userType ?? "guest");
	return (
		<AuthContext.Provider value={{ user, setUser, userRole, setUserRole }}>{props.children}</AuthContext.Provider>
	);
}

export { AuthContextProvider, AuthContext };
