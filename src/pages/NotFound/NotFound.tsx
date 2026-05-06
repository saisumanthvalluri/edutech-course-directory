import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./notFound.css";

const NotFound = () => {
	return (
		<>
			<Header />
			<section className="not_found_sec">
				<h1 className="not_found_title">404 Not Found</h1>
				<p className="not_found_desc">Sorry, the page you are looking for could not be found.</p>
				<Link to="/" className="not_found_btn">
					Return to Home
				</Link>
			</section>
			<Footer />
		</>
	);
};

export default NotFound;
