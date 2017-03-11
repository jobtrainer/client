import React from "react";
import { connect } from "react-redux";
import CourseGroupCard from "../../components/Cards/CourseGroupCard";

import "./index.scss";
import DomainCard from "../../components/Cards/DomainCard";

class MainPage extends React.Component {
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