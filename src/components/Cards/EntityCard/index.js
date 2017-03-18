import React from "react";

import Card from "../Card";

import "./index.scss";

export default function EntityCard({id, title, description, status, children}) {
    const entityHeaderText = title ? title.split('').filter(curr => curr.match(/[A-Z]/)).join('') : title;
    return (
        <Card className="entity_card_container">
            <div className="entity_display_container">
                <span className="entity_display_title">{entityHeaderText}</span>
            </div>
            <div className="entity_details">
                <h5 className="entity_title">{title}</h5>
                <div className="entity_description">{description}</div>
                <div className="entity_children">{children}</div>
            </div>
        </Card>
    );
}