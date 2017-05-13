import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import CourseStepsNavigation from "../../components/Navigation/CourseStepsNavigation";

import * as COURSE_CONSTANT from "../../constants/courseConstants";

class CoursePage extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		console.log(this.props);
		return (
			<div>
				<div>Hello world</div>
				<Link to={`/${this.props.scopeId}/${this.props.courseId}/${2}`} >
					Click me!
				</Link>
				<CourseStepsNavigation currentStep={1} stepsProperties={this.props.steps}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        scopes: state.scopes.get('scopes')
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

function mergeProps(state, dispatch, props) {
	console.log(props.params);
    let scopeId = props.params.scopeId;
	let courseId = props.params.courseId;
	let scope = state.scopes.find(currScope => currScope.id == scopeId);
	let course = scope.courses.find(currCourse => currCourse.id == courseId);
	let steps = course.steps;
	return {
        scope,
		course,
		steps,
        scopeId,
		courseId
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CoursePage);