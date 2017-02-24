import "./index.scss";
import { Link } from "react-router";

const NavigationLink = ({to, linkText}) => {
	return (
		<div className="navigation_item"><Link to={to}>{linkText}</Link></div>
	);
};

export default NavigationLink;