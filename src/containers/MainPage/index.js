import React from "react";
import { connect } from "react-redux";

import "./index.scss";

class MainPage extends React.Component {
    renderSingleTutorial(index, header, text) {
        return (
            <div key={index}>
                <h5>{index + 1}. {header}</h5>
                <span>{text}</span>
            </div>
        )
    }


    render() {
        const tutorialElements = this.props.tutorials.map((curr, index) => this.renderSingleTutorial(index, curr.header, curr.text));
        return (
            <div className="page main_page_container">
                <h1>JobTrainer</h1>
                <span>Trainer for new jobs</span>
                <h3>Tutorials</h3>
                {tutorialElements}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tutorials: state.get("tutorials")
    };
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);