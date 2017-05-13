import "./index.scss";
import CourseStepNavigationItem from "../CourseStepNavigationItem";

const CourseStepsNavigation = ({currentStep, stepsProperties = []}) => {
	var stepsNavigationItems = stepsProperties.map((stepProperties, index) => {
			return (
				<CourseStepNavigationItem 	
						key={index}
						title={stepProperties.title}
						description={stepProperties.description}
						stepNum={index}
						isActive={currentStep === index} />
			);
		});

	return (
		<div className="navigation_items">
			{stepsNavigationItems}
		</div>
	);
};

export default CourseStepsNavigation;