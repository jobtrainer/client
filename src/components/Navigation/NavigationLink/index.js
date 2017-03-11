import "./index.scss";
import { Link } from "react-router";

const NavigationLink = ({to, linkText, className}) => {
	const itemClassName = `navigation_item${className ? ' ' + className : ''}`;

	return (
		<Link to={to}><div className={itemClassName}>{linkText}</div></Link>
	);
};

export default NavigationLink;