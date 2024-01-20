import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
	const { handleLogout, isLoggingOut } = useLogout();
	return (
		<Box
			width={"100vw"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={2}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 10 }}
		>
			<Flex direction={"row"} gap={100} w='full' height={"full"}>
				<Flex direction={"row"} gap={10} cursor={"pointer"}>
					<SidebarItems />
				</Flex>
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={2}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
						onClick={handleLogout}
						alignItems={"center"}
						gap={3}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: 200 }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
							isLoading={isLoggingOut}
						>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;
