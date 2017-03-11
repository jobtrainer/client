import "./index.scss";
import {COURSE_STATUSES} from "../../../constants/courseConstants";

// TODO: id?
const CourseGroupCard = ({ title, courses }) => {
	return (
		<div className="course_group_card">
			<div className="course_group_header">{title}</div>
			<div className="active_course"></div>
			<div className="course_group_dependencies">
			</div>
		</div>
	);
};

export default CourseGroupCard;


CourseGroupCard.PropTypes = {
	title: React.PropTypes.string,
	courses: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string,
		title: React.PropTypes.string,
		description: React.PropTypes.string,
		status: React.PropTypes.oneOf(COURSE_STATUSES),
		imageUrl: React.PropTypes.string
	}))
}