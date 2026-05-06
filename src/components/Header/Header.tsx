import { ProfileIcon } from "../../assets/svgs";
import "./header.css";
const Header = () => {
	return (
		<nav className="header">
			<h1 className="header-title">EduTech Course Directory</h1>
			<ProfileIcon width="40px" height="40px" />
		</nav>
	);
};

export default Header;
