import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import "./index.scss";
import EntityCard from "../../components/Cards/EntityCard";

class MainPage extends React.Component {
    render() {
        const scopeElements = this.props.courses.map(({id, title, description, imageUrl}) => 
            <Link key={id} to={`/${id}`}> 
                <EntityCard id={id} title={title} description={description} imageUrl={imageUrl}/>
            </Link>
        );
        return (
            <div className="page page_container">
                <h1>JobTrainer</h1>
                <span>Trainer for new jobs</span>
                <hr/>
                <h3>Scopes</h3>
                <div className="container scopes_container">
                    {scopeElements}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.scopes.get("scopes")
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);