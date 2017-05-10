import React from "react";
import { Link } from "react-router";

import * as COURSE_CONSTANT from "../../constants/courseConstants";

class CoursePage extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<div>Hello world</div>
				<Link to={`/${this.props.params.scopeId}/${this.props.params.courseId}/${2}`} >
					Click me!
				</Link>
			</div>
		);
	}
}

export default CoursePage;