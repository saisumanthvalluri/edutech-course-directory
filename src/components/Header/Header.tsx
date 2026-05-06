import { ProfileIcon } from "../../assets/svgs";
import "./header.css";
const Header = () => {
	return (
		<nav className="header">
			<h1 className="header-title">EduTech Course Directory</h1>
			<ProfileIcon className="profile-icon" />
		</nav>
	);
};

export default Header;
