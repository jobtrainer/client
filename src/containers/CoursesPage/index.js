import React from "react";

import * as COURSE_CONSTANT from "../../constants/courseConstants";
import CourseGroupCard from "../../components/Cards/CourseGroupCard";

class CoursesPage extends React.Component {
	constructor(props) {
		super(props);
		this.courses = [{
			id: 'dj2912jd019dj',
			title: 'Components',
			description: 'write react components!',
			status: COURSE_CONSTANT.COURSE_STATUS_PENDING,
			imageUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg'
		}, {
			id: 'dj2912jd019dj31313',
			title: 'Applications',
			description: 'write react applications!',
			status: COURSE_CONSTANT.COURSE_STATUS_IN_PROGRESS,
			imageUrl: 'https://www.what-dog.net/Images/faces2/scroll0015.jpg'
		}, {
			id: 'dj2912jd019dj211212',
			title: 'Redux',
			description: 'write redux data flow!',
			status: COURSE_CONSTANT.COURSE_STATUS_PENDING,
			imageUrl: 'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/DA746CFE-B4A4-43C0-A02F8BAF7BC6CE20/thul-51a71b71-3799-5e48-8a84-5b08c9efa9cf.jpg?response-content-disposition=inline'
		}];
	}


	render() {
		return (
			<CourseGroupCard title="hello world" courses={this.courses} />
		);
	}
}

export default CoursesPage;