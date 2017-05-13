import "./index.scss";

const CourseStepNavigationItem = ({stepNum, title, description, isActive}) => {
	let stepClassNameAddition = isActive ? "active" : "not_active";
	let stepClassName = "step_navigation_item step_navigation_item_" + stepClassNameAddition;
	return (
		<div className={stepClassName}>
			<span className="step_number">{stepNum}</span>
			<span className="separator"> - </span>
			<span className="title">{title}</span>
			{ //TODO: Implement step description tooltip
			}
		</div>
	);
};

export default CourseStepNavigationItem;