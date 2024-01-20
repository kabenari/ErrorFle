import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";


const PageLayout = ({ children }) => {
	const { pathname } = useLocation();
	const [user, loading] = useAuthState(auth);
	const canRenderSidebar = pathname !== "/auth" && user;
	const canRenderNavbar = !user && !loading && pathname !== "/auth";

	return (
		<Flex flexDir={canRenderNavbar ? "row" : "row"}>

			{canRenderSidebar ? (
				<Box w={{ base: "70px", md: "240px" }}>
					<Sidebar />
				</Box>
			) : null}

			<Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
				{children}
			</Box>
		</Flex>
	);
};

export default PageLayout;
