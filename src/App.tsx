import { useEffect } from "react";
import "./App.css";
import AddNewUser from "./components/AddNewUser";
import DisplayUserList from "./components/DisplayUserList";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
	useEffect(() => {
		AOS.init({
			duration: 700,
		});
	}, []);
	return (
		<>
			<div className="fixed bottom-3 right-3 z-10">
				<AddNewUser></AddNewUser>
			</div>
			<div className="main_container m-0">
				<div className="text-5xl font-semibold text-center pt-10 mb-10">
					🚀 Welcome to the demo of user list !
				</div>
				<DisplayUserList></DisplayUserList>
			</div>
		</>
	);
}

export default App;
