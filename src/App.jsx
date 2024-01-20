import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import PreLoader from "./components/PreLoader/PreLoader";
import ChatRoom from "./components/ChatForum/ChatRoom";

function App() {
	const [authUser] = useAuthState(auth);

	return (
		<>
		<PreLoader/>
		<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
				<Route path='/ChatRoom' element={<ChatRoom />} />
			</Routes>
		</PageLayout>
		</>
	);
}

export default App;
