import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import EntityCard from "../../components/Cards/EntityCard";

import "./index.scss";

function ScopePage({scope}) {
    console.log(scope);
    const { id, title, description, courses } = scope;
    const courseCards = courses && courses.map(({id, title, description, status}) =>
        <EntityCard key={id} id={id} title={title} description={description} status={status}/>
    );

    return (
        <div className="page scope_page_container">
            <h1>{title}</h1>
            <span>{description}</span>
            <hr/>
            <h3>Courses</h3>
            <div className="container scope_courses_container">
                {courseCards}
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        scopes: state.get("scopes")
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

function mergeProps(state, dispatch, props) {
    return {
        scope: state.scopes.find(currScope => currScope.id == props.params.scopeId)
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ScopePage);