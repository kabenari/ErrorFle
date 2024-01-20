import CreatePost from "./CreatePost";
import Home from "./Home";
import ChatRoom from "../Sidebar/ChatRoom"
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<ChatRoom/>
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
