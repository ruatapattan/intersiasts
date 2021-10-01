import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

const HeaderHereContext = createContext();

const useHeaderHere = () => {
	return useContext(HeaderHereContext);
};

function HeaderHereProvider(props) {
	const [here, setHere] = useState("");

	const location = useLocation();

	useEffect(() => {
		setHere(location.pathname);
	}, [location]);

	return <HeaderHereContext.Provider value={{ here }}>{props.children}</HeaderHereContext.Provider>;
}

export { HeaderHereContext, HeaderHereProvider, useHeaderHere };
