import React from "react";
import { connect } from "react-redux";

import "./index.scss";
import DomainCard from "../../components/Cards/DomainCard";

class MainPage extends React.Component {
    renderSingleCourse({id, title, description, imageUrl}) {
        return (
            <div key={id} id={id} className="course_container" key={id}>
                <img className="course_image" src={imageUrl}/>
                <h5 className="course_title" >{title}</h5>
                <span className="course_description">{description}</span>
            </div>
        )
    }

    render() {
        const domainElements = this.props.courses.map(({id, title, description, imageUrl}) => 
                <DomainCard key={id} id={id} title={title} description={description} imageUrl={imageUrl}></DomainCard>);
        return (
            <div className="page main_page_container">
                <h1>JobTrainer</h1>
                <span>Trainer for new jobs</span>
                <hr/>
                <h3>Domains</h3>
                {domainElements}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.get("domains")
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);