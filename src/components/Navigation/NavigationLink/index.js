import "./index.scss";
import { Link } from "react-router";

const NavigationLink = ({to, linkText, className}) => {
	const itemClassName = `navigation_item${className ? ' ' + className : ''}`;

	return (
		<div className={itemClassName}><Link to={to}>{linkText}</Link></div>
	);
};

export default NavigationLink;