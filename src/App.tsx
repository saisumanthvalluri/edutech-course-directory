import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Courses />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
