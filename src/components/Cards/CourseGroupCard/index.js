import "./index.scss";
import Card from "../Card";
import StatusIcon from "../../Icons/StatusIcon";
import * as STATUS_ICON from "../../Icons/StatusIcon/constants";
import { COURSE_STATUSES, COURSE_STATUS_IN_PROGRESS} from "../../../constants/courseConstants";

// TODO: id?
const CourseGroupCard = ({ courses }) => {
	let activeCourses = courses.filter((course) => {
		return course.status === COURSE_STATUS_IN_PROGRESS;
	});

	let currentCourse = activeCourses.length === 0 ? courses[0] : activeCourses[0];

	let leftCourses = courses.filter((course) => {
		return currentCourse.id !== course.id;
	});

	let coursesContent = leftCourses.map((course) => {
		return (
			<div className="course">
				<StatusIcon status={course.status} className="course_status" />
				<span className="course_title"> - {course.title}</span>
			</div>);
	});

	return (
		<Card className="course_group_card">
			<div className="current_course">
				<div className={`course_status course_status_${currentCourse.status}`}></div>
				<div className='course_title'>{currentCourse.title}</div>
				<div className='course_description'>{currentCourse.description}</div>
			</div>
			<div className="course_group_dependencies">
				{coursesContent}
			</div>
		</Card>
	);
};
// asd sdasd   
export default CourseGroupCard;

CourseGroupCard.PropTypes = {
	courses: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string,
		title: React.PropTypes.string,
		description: React.PropTypes.string,
		status: React.PropTypes.oneOf(COURSE_STATUSES),
		imageUrl: React.PropTypes.string
	}))
}